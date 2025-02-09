import { clerkMiddleware } from "@clerk/nextjs/server"; // ✅ Correct Import

export default clerkMiddleware(); // ✅ No parameters here!

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // ✅ Protects most routes
    "/",
    "/(api|trpc)(.*)",
  ],
};
