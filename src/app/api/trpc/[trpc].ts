import { createNextApiHandler } from "@trpc/server/adapters/next"
import { createTRPCContext } from "@/server/trpc/trpc"
import { appRouter } from "@/server/trpc/root"

// @link https://nextjs.org/docs/api-routes/introduction
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
})
