import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import * as Lazy from "@/router/lazy";

import App from "@/App";

import { PATH } from "@/constants/path";

import Error from "@/components/common/Error/Error";

import Error404Page from "@/pages/Error404Page";
import AuthPage from "@/pages/AuthPage/AuthPage";
import StoryPageSkeleton from "@/pages/StoryPage/StoryPageSkeleton";
import SirenPageSkeleton from "@/pages/SirenPage/SirenPageSkeleton";
import QuestionPageSkeleton from "@/pages/QuestionPage/QuestionPageSkeleton";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <App />,
      errorElement: <Error404Page />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<StoryPageSkeleton />}>
              <Lazy.StoryPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIREN,
          element: (
            <Suspense fallback={<SirenPageSkeleton />}>
              <Lazy.SirenPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIREN_DETAIL(":sirenId"),
          element: (
            <Suspense>
              <Lazy.SirenDetailPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIREN_UPLOAD,
          element: <Lazy.SirenUploadPage />,
        },
        {
          path: PATH.QUESTION,
          element: (
            <Suspense fallback={<QuestionPageSkeleton />}>
              <Lazy.QuestionPage />
            </Suspense>
          ),
        },
        {
          path: PATH.QUESTION_DETAIL(":questionId"),
          element: (
            <Suspense fallback={<div />}>
              <Lazy.QuestionDetailPage />
            </Suspense>
          ),
        },
        {
          path: PATH.QUESTION_UPLOAD,
          element: (
            <Suspense>
              <Lazy.QuestionUploadPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIGN_UP,
          element: (
            <Suspense>
              <Lazy.SignUpPage />
            </Suspense>
          ),
        },
        {
          path: "/planning",
          element: (
            <Suspense fallback={<div></div>}>
              <Lazy.PlanningPage />
            </Suspense>
          ),
        },
        {
          path: "/planning/create-team",
          element: (
            <Suspense fallback={<div></div>}>
              <Lazy.CreateTeamPage />
            </Suspense>
          ),
        },
        {
          path: "/team/:teamId",
          element: (
            <Suspense fallback={<div></div>}>
              <Lazy.TeamPage />
            </Suspense>
          ),
        },
        { path: PATH.AUTH, element: <AuthPage /> },
        {
          path: PATH.CONNECTION,
          element: (
            <Suspense fallback={<div />}>
              <Lazy.ConnectionPage />,
            </Suspense>
          ),
        },
        {
          path: PATH.MY(":userUrl"),
          element: (
            <ErrorBoundary
              onReset={() => (window.location.href = PATH.ROOT)}
              FallbackComponent={Error}
            >
              <Suspense fallback={<div />}>
                <Lazy.MyPage />
              </Suspense>
            </ErrorBoundary>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
