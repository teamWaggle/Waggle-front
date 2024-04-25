import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { PATH } from "@/constants/path";

import App from "@/App";
import {
  QuestionCreatePage,
  SignUpPage,
  SirenCreatePage,
  TeamPage,
  Error404Page,
  AuthPage,
} from "@/pages";
import StoryPageSkeleton from "@/pages/StoryPage/StoryPageSkeleton";

import * as Lazy from "@/router/lazy";
import Error from "@/components/common/Error/Error";

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
            <Suspense fallback={<div>로딩중</div>}>
              <Lazy.SirenPage />
            </Suspense>
          ),
        },
        {
          path: PATH.SIREN_DETAIL(":sirenId"),
          element: (
            <Suspense fallback={<div>로딩중</div>}>
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
            <Suspense fallback={<div>로딩중</div>}>
              <Lazy.QuestionPage />
            </Suspense>
          ),
        },
        {
          path: PATH.QUESTION_DETAIL(":questionId"),
          element: (
            <Suspense fallback={<div>로딩중</div>}>
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
        { path: "/team/:teamId", element: <TeamPage /> },
        { path: PATH.AUTH, element: <AuthPage /> },
        {
          path: PATH.MY(":userUrl"),
          element: (
            <ErrorBoundary
              onReset={() => (window.location.href = PATH.ROOT)}
              FallbackComponent={Error}
            >
              <Lazy.MyPage />
            </ErrorBoundary>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
