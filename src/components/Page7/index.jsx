import entry from "assets/page_7_entry.png";
import firework from "assets/page_7_firework.png";
import smoke from "assets/page_7_smoke.gif";
import { AbsoluteImage } from "components/Absolute";
import { Cursor } from "components/Cursor";
import Page from "components/Page";
import { useState } from "react";

export default function Page7() {
  const [entryHover, setEntryHover] = useState(false);
  // TODO: 开启入口
  const [entryVisible] = useState(false);

  return (
    <Page n={7}>
      <AbsoluteImage
        height={1500}
        width={1920}
        left={0}
        top={-1005}
        src={smoke}
      />
      {entryVisible && (
        <Cursor
          left={73}
          top={600}
          width={504}
          height={375}
          absoluteChildren={
            <AbsoluteImage
              left={121}
              top={646}
              width={294}
              height={223}
              src={entry}
              motion
              animate={{
                rotate: entryHover ? 9 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            />
          }
          mouseEventFix
          autoHide
          onMouseEnter={() => {
            setEntryHover(true);
          }}
          onMouseLeave={() => {
            setEntryHover(false);
          }}
        >
          <AbsoluteImage
            left={-111}
            top={-108}
            width={312}
            height={437}
            src={firework}
          />
        </Cursor>
      )}
    </Page>
  );
}
