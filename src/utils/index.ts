import { Howl, HowlOptions } from "howler";
import { useEffect, useState } from "react";

// force use CDN at local, for testing use only
// files might not have been updated!
const LOCAL_FORCE_USE_CDN = false;
const ONLINE_USE_CDN = true;

export const isOnline = () =>
  (process.env.NODE_ENV === "development" && LOCAL_FORCE_USE_CDN) ||
  (process.env.NODE_ENV === "production" && ONLINE_USE_CDN);

export function useHowl(src: string, options?: Omit<HowlOptions, 'src'>) {
  const [howl, setHowl] = useState<Howl | null>(null);

  useEffect(() => {
    setHowl(new Howl({ src, ...options }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return howl;
}
