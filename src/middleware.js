
// middleware.js

import {redirect} from "next/navigation";
export { default } from "next-auth/middleware"
import { getSession } from "next-auth/react"

export const config = {
    matcher: ["/setting", '/profile', '/friends']
}
