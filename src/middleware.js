import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = request.cookies.get("next-auth.session-token"); 
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/generate"],
};
