export const getBaseUrl = () => {
  let baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || "http://localhost:3000";

  return baseUrl;
};
