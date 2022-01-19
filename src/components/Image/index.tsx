import { ComponentProps, useMemo } from "react";
import { isOnline } from "utils";

export interface ImageProps extends ComponentProps<"img"> {
  query?: string;
}

const online = isOnline();

export function Image({ src, query = "", ...props }: ImageProps) {
  const actualQuery = useMemo(() => (online ? query : ""), [query]);
  const domain = useMemo(
    () => (online ? "https://static.std4453.com/internet-temple" : ""),
    [],
  );
  const realSrc = useMemo(
    () => `${domain}${src}${actualQuery}`,
    [domain, src, actualQuery],
  );
  return <img src={realSrc} {...props} />;
}
