// import type { PropsWithChildren } from "react";
// import { Suspense } from "react";
// import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

// import { queryClient } from "@/main";

// import type { FallbackProps } from "react-error-boundary";
// import { ErrorBoundary } from "react-error-boundary";

import { css } from "@emotion/react";

// import Error from "@/components/common/Error/Error";

import { Flex, Heading } from "@/components/common";
import StoryMain from "@/components/Story/StoryMain/StoryMain";
// import { useResetError } from "@/hooks/common/useResetError";

import { Theme } from "@/styles/Theme";
// import { useQueryErrorResetBoundary, useSuspenseQuery } from "@tanstack/react-query";

// export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
//   console.log(error.response.status);
//   console.log(error.response.code);
//   return (
//     <div>
//       <p>{error.toString()}</p>
//       <p>오류가 발생했습니다.</p>
//       <p>재시도 해주세요.</p>
//       <button onClick={resetErrorBoundary}>재시도</button>
//     </div>
//   );
// };

// const getData = async () => {
//   const { data } = await axios({
//     method: "get",
//     url: "/api/hello",
//   });

//   return data;
// };

// const getDataQuery = () => {
//   const { data: testData } = useSuspenseQuery({
//     queryKey: ["data"],
//     queryFn: () => getData(),
//     retry: false,
//   });

//   return { testData };
// };

// export const SuspenseAndErrorBoundary = ({ children }: { children: React.ReactNode }) => {
//   const { handleErrorReset } = useResetError();

//   return (
//     <ErrorBoundary
//       // 에러 발생시 실행
//       // onError={() => navigate("/siren")}

//       // 리셋 실행 코드
//       onReset={() => handleErrorReset}
//       FallbackComponent={Error}
//     >
//       <Suspense fallback={<div>로딩중</div>}>{children}</Suspense>
//     </ErrorBoundary>
//   );
// };

// const Test = () => {
//   const { testData } = getDataQuery();

//   return <div>{testData}</div>;
// };

const StoryPage = () => {
  return (
    <>
      <section css={bioSectionStyle}>
        <Flex styles={{ justify: "center", align: "center", height: "100%" }}>
          <Heading>와글과 함께 꼬리를 흔들어요 왕왕!</Heading>
        </Flex>
      </section>

      <StoryMain />
    </>
  );
};

export default StoryPage;

export const bioSectionStyle = css({
  height: "332px",
  backgroundColor: Theme.color.brand_primary,

  "& > div > h4": {
    color: Theme.color.white,
    fontWeight: "700",
  },
});
