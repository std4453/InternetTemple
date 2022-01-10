import { useMemo } from "react";
import { isOnline } from "utils";

export function Image({
  src,
  query: queryStr,
}: {
  src: string;
  query?: string;
}) {
  const query = useMemo(() => (isOnline() ? `?${queryStr}` : ""), []);
  const domain = useMemo(
    () => (isOnline() ? "https://static.std4453.com/internet-temple" : ""),
    [],
  );
  const realSrc = useMemo(
    () => `${domain}${src}${query}`,
    [domain, src, query],
  );
  return <img src={realSrc} />;
}
