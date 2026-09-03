import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "@/lib/jwt";

export function middleware(req: NextRequest) {
  const publicRoutes = ["/", "/agro", "/saude", "/raio-x", "/contato", "/api/auth/login", "/api/auth/register"];
  
  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const payload = verifyJWT(token);
  if (!payload) {
    return NextResponse.json(
      { error: "Invalid token" },
      { status: 401 }
    );
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-user-id", payload.sub);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/app/:path*", "/api/protected/:path*"],
};
