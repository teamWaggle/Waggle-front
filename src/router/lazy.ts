import { lazy } from "react";

export const StoryPage = lazy(() => import("@/pages/StoryPage/StoryPage"));
export const SirenPage = lazy(() => import("@/pages/SirenPage"));
export const SirenDetailPage = lazy(() => import("@/pages/SirenDetailPage"));
export const QuestionPage = lazy(() => import("@/pages/QuestionPage"));
export const QuestionDetailPage = lazy(() => import("@/pages/QuestionDetailPage"));
export const CreateTeamPage = lazy(() => import("@/pages/CreateTeamPage"));
export const PlanningPage = lazy(() => import("@/pages/PlanningPage"));
export const MyPage = lazy(() => import("@/pages/MyPage"));
