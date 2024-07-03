export const getBaseUrl = () => {
  return process.env.VERCEL_ENV === "production"
    ? process.env.NEXT_PUBLIC_URL
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:3000`;
};
