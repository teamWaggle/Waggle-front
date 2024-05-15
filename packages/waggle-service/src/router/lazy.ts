import { lazy } from "react";

export const StoryPage = lazy(() => import("@/pages/StoryPage/StoryPage"));
export const SirenPage = lazy(() => import("@/pages/SirenPage/SirenPage"));
export const SirenDetailPage = lazy(() => import("@/pages/SirenDetailPage"));
export const QuestionPage = lazy(() => import("@/pages/QuestionPage/QuestionPage"));
export const QuestionDetailPage = lazy(() => import("@/pages/QuestionDetailPage"));
export const CreateTeamPage = lazy(() => import("@/pages/CreateTeamPage"));
export const PlanningPage = lazy(() => import("@/pages/PlanningPage"));
export const MyPage = lazy(() => import("@/pages/MyPage"));
export const SirenUploadPage = lazy(() => import("@/pages/SirenUploadPage/SirenUploadPage"));
export const QuestionUploadPage = lazy(() => import("@/pages/QuestionUploadPage"));
export const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
export const ConnectionPage = lazy(() => import("@/pages/ConnectionPage"));
export const TeamPage = lazy(() => import("@/pages/TeamPage"));
