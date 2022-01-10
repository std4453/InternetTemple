import React, { ComponentProps, useMemo } from "react";
import { isOnline } from "utils";

export interface ImageProps extends ComponentProps<"img"> {
  query?: string;
}

export function Image({ src, query = "", ...props }: ImageProps) {
  const actualQuery = useMemo(() => (isOnline() ? `?${query}` : ""), [query]);
  const domain = useMemo(
    () => (isOnline() ? "https://static.std4453.com/internet-temple" : ""),
    [],
  );
  const realSrc = useMemo(
    () => `${domain}${src}${actualQuery}`,
    [domain, src, actualQuery],
  );
  return <img src={realSrc} {...props} />;
}
