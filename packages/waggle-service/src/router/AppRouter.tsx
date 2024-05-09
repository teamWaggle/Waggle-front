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

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <App />,
      errorElement: <Error404Page />,
      children: [
        {
          path: "",
          element: <Lazy.StoryPage />,
        },
        {
          path: PATH.SIREN,
          element: <Lazy.SirenPage />,
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
          element: <ConnectionPage />,
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
