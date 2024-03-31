import { lazy } from "react";

export const LandingPage = lazy(() => import("@/pages/LandingPage/LandingPage"));

export const SirenPage = lazy(() => import("@/pages/SirenPage"));

export const SirenDetailPage = lazy(() => import("@/pages/SirenDetailPage"));

export const QuestionPage = lazy(() => import("@/pages/QuestionPage"));

export const QuestionDetailPage = lazy(() => import("@/pages/QuestionDetailPage"));
