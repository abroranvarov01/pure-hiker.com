import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "lifestraw-personal-water-filter",
  "sawyer-mini-water-filtration-system",
  "grayl-geopress-water-purifier-bottle",
  "katadyn-vario-water-filter",
  "msr-guardian-purifier",
  "platypus-quickdraw-filter",
  "steripen-ultralight-uv-water-purifier",
  "aquamira-frontier-max-worldwide-filter",
  "hydroblu-versa-flow-filter",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://lyophihome.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("hi", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/pure"],
};
