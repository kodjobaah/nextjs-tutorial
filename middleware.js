import { NextResponse } from "next/server"

export function middleware(request) {
    console.log("Hello THREE")
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ['/about/:path*']
}