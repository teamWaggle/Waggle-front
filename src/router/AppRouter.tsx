import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { PlanningPage, QuestionCreatePage, SignUpPage, SirenCreatePage, TeamPage } from "@/pages";
import * as Lazy from "@/router/lazy";

import { PATH } from "@/constants/path";

import LandingPageSkeleton from "@/pages/LandingPage/LandingPageSkeleton";

const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: PATH.ROOT,
			element: <App />,
			children: [
				{
					path: "",
					element: (
						<Suspense fallback={<LandingPageSkeleton />}>
							<Lazy.LandingPage />
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
					path: "/question-new",
					element: <QuestionCreatePage />,
				},
				{
					path: "/signup",
					element: <SignUpPage />,
				},
				{
					path: "/planning",
					element: <PlanningPage />,
				},
				{
					path: "/siren-new",
					element: <SirenCreatePage />,
				},
				{ path: "/team/:teamName", element: <TeamPage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
