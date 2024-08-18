import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "http://localhost:3000"
export function middleware(req: NextRequest) {
    
    const currentPath = req.nextUrl.pathname;
    const isPublic = currentPath === "/login";
    if(currentPath ==="/") {
        return NextResponse.redirect(new URL("/login", BASE_URL))
    }
    //retrieving the token to see if the user's logged in
    const cookieStore = cookies();
    const token = cookieStore?.get('token')?.value ||"";

    //if it's a public route and they are logged in we want to navigated away
    if (isPublic && token !=="") {
        return NextResponse.redirect(new URL("/", BASE_URL))
    }

    //if it's a private, and there's no token- we redirect to the login page
    if (!isPublic && token =="") {
        return NextResponse.redirect(new URL("/login", BASE_URL))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/login", "/DashBoard"],
};