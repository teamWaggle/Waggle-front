import { ErrorBoundary } from "react-error-boundary";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import Error from "@/components/common/Error/Error";

const RetryErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} FallbackComponent={Error}>
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
