import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import {
	PlanningPage,
	QuestionPage,
	SignUpPage,
	SirenCreatePage,
	SirenDetailPage,
	SirenPage,
} from "@/pages";
import * as Lazy from "@/router/lazy";

import LandingPageSkeleton from "@/pages/LandingPage/LandingPageSkeleton";

const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
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
					path: "/siren",
					element: <SirenPage />,
				},
				{
					path: "/question",
					element: <QuestionPage />,
				},
				{
					path: "/siren/view/:id",
					element: <SirenDetailPage />,
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
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default AppRouter;
