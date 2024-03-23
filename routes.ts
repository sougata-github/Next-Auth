/** Routes that do not require authentication. */

export const publicRoutes = ["/"];

/**
 * An array of routes for authentication.
 * These routes will redirect logged in users to "/settings".
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * Prefix for api authentication routes.
 * These routes need to be accessible for both authenticated and non-authenticated users.
 * Routes that start with this prefix are used for API authentication purposes.
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default route where the users will log in.
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
