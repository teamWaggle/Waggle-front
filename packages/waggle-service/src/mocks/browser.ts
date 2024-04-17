import { setupWorker } from "msw";

import { testHandlers } from "@/mocks/handlers/testHandler";

export const worker = setupWorker(...testHandlers);
