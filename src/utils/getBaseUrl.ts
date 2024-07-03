export const getBaseUrl = () => {
  let baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_URL
      : "http://localhost:3000";
  return baseUrl;
};
