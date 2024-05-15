import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import * as Lazy from "@/router/lazy";

import App from "@/App";

import { PATH } from "@/constants/path";

import Error from "@/components/common/Error/Error";

import {
  SignUpPage,
  Error404Page,
  AuthPage,
  ConnectionPage,
  SirenCreatePage,
  QuestionCreatePage,
  TeamPage,
} from "@/pages";
import StoryPageSkeleton from "@/pages/StoryPage/StoryPageSkeleton";
import SirenPageSkeleton from "@/pages/SirenPage/SirenPageSkeleton";

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
            <Suspense fallback={<div />}>
              <Lazy.SirenDetailPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIREN_CREATE,
          element: <SirenCreatePage />,
        },
        {
          path: PATH.QUESTION,
          element: (
            <Suspense fallback={<div />}>
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
          path: PATH.QUESTION_CREATE,
          element: <QuestionCreatePage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
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
          path: "/siren-new",
          element: <SirenCreatePage />,
        },
        {
          path: "/team/:teamId",
          element: (
            <Suspense fallback={<div></div>}>
              <TeamPage />
            </Suspense>
          ),
        },
        { path: PATH.AUTH, element: <AuthPage /> },
        {
          path: PATH.CONNECTION,
          element: (
            <Suspense fallback={<div />}>
              <ConnectionPage />,
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
