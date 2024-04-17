import { rest } from "msw";

export const testHandlers = [
  rest.get("/api/hello", (_, res, ctx) => {
    return res(ctx.status(500), ctx.delay(1000), ctx.json({ data: "오류" }));
  }),
];
