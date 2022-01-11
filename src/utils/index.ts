// force use CDN at local, for testing use only
// files might not have been updated!
const LOCAL_FORCE_USE_CDN = true;

export const isOnline = () =>
  (process.env.NODE_ENV === "development" && LOCAL_FORCE_USE_CDN) ||
  process.env.NODE_ENV === "production";
