type OS = "iOS" | "Android" | "unknown";

export const getOS = (): OS => {
  const userAgent = navigator.userAgent || navigator.vendor;

  // Check for iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return "iOS";
  }
  // Check for Android
  else if (/android/i.test(userAgent)) {
    return "Android";
  }
  // Neither Android nor iOS
  else {
    return "unknown";
  }
};
