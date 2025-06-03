import { Cookie, getCookies, setCookie } from "@std/http/cookie";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ChangeColor from "../islands/ChangeColor.tsx";

export const handler:Handlers = {
    GET: (req:Request, ctx:FreshContext<unknown, string>) => {
        const cookies = getCookies(req.headers)
        if(!cookies) return ctx.render()
        const username = cookies.username
        return ctx.render(username)
    },
    POST: async(req:Request, _ctx:FreshContext<unknown>) => {
        const form = await req.formData()
        const name = form.get("name")?.toString()!

        const headers = new Headers()
        const cookie: Cookie = {name: "username" , value: name}
        setCookie(headers, cookie)
        headers.set("location", "/profile")
        return new Response(null, {
            status:302,
            headers
        })
    }
}


export default (props:PageProps<string>) => <ChangeColor username={props.data}/>