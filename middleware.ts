import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "sarah-mitchell",
  "jake-thompson",
  "emma-rodriguez",
  "marcus-chen",
  "olivia-barnes",
  "david-park",
  "zara-ahmed",
  "ryan-foster",
  "luna-patel",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://lyophihome.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviewers/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("hi", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/pure"],
};
