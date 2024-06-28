export const getBaseUrl = () => {
  const env = process.env.VERCEL_ENV;
  let baseUrl = "http://localhost:3000";

  if (env === "production") {
    baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL!;
  } else if (env === "preview" || env === "development") {
    baseUrl = process.env.VERCEL_URL!;
  }

  return baseUrl;
};
