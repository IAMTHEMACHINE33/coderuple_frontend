export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // "/admin/:path*".
    "/admin",
    "/admin/testimonials",
    "/admin/inquiry",
  ],
};
