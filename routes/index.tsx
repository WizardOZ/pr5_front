import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler:Handlers = {
  GET: (_req:Request, _ctx:FreshContext<unknown>) => {
    const headers = new Headers()
    headers.set("location", "/profile")
    return new Response(null, {
      status: 302,
      headers
    })
  }
}

export default function Home() {
  return <h1>Index</h1>
}
