import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { PlanningPage, QuestionCreatePage, SignUpPage, SirenCreatePage, TeamPage } from "@/pages";
import * as Lazy from "@/router/lazy";

import { PATH } from "@/constants/path";

import StoryPageSkeleton from "@/pages/StoryPage/StoryPageSkeleton";

const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: PATH.ROOT,
			element: <App />,
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
					element: <PlanningPage />,
				},
				{ path: "/team/:teamName", element: <TeamPage /> },
				{
					path: PATH.MY(":userUrl"),
					element: (
						<Suspense fallback={<div>로딩중</div>}>
							<Lazy.MyPage />
						</Suspense>
					),
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
