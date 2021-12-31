import { AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import tag8 from "assets/page_56_tag_8.svg";
import tag9 from "assets/page_56_tag_9.svg";
import tag13 from "assets/page_56_tag_13.svg";
import tag14 from "assets/page_56_tag_14.svg";
import tag15 from "assets/page_56_tag_15.svg";
import tag10 from "assets/page_56_tag_10.svg";
import tag11 from "assets/page_56_tag_11.svg";
import tag12 from "assets/page_56_tag_12.svg";
import tag17 from "assets/page_56_tag_17.svg";
import tag18 from "assets/page_56_tag_18.svg";
import tag19 from "assets/page_56_tag_19.svg";
import tag20 from "assets/page_56_tag_20.svg";
import tag21 from "assets/page_56_tag_21.svg";
import tag22 from "assets/page_56_tag_22.svg";
import tag23 from "assets/page_56_tag_23.svg";
import tag24 from "assets/page_56_tag_24.svg";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";

function Tag({ tag, hover }) {
  const [hovering, setHovering] = useState(false);
  const handleMouseEnter = useCallback(() => setHovering(true), []);
  const handleMouseLeave = useCallback(() => setHovering(false), []);
  return (
    <>
      {React.cloneElement(tag, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        style: {
          cursor: "pointer",
        },
      })}
      <motion.div
        animate={{
          opacity: hovering ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {hover}
      </motion.div>
    </>
  );
}

export default function Page56() {
  return (
    <>
      <Page n={5}>
        <Tag
          tag={
            <AbsoluteImage
              width={121}
              height={87}
              top={215}
              left={1480}
              src={tag8}
            />
          }
          hover={
            <AbsoluteImage
              height={83}
              width={293}
              left={1308}
              top={293}
              src={tag19}
            />
          }
        />
        <Tag
          tag={
            <AbsoluteImage
              height={87}
              width={199}
              left={1080}
              top={109}
              src={tag9}
            />
          }
          hover={
            <AbsoluteImage
              height={83}
              width={293}
              left={986}
              top={190}
              src={tag18}
            />
          }
        />
        <Tag
          tag={
            <AbsoluteImage
              height={87}
              width={155}
              left={518}
              top={65}
              src={tag13}
            />
          }
          hover={
            <AbsoluteImage
              height={118}
              width={380}
              left={518}
              top={146}
              src={tag17}
            />
          }
        />
        <Tag
          tag={
            <AbsoluteImage
              height={87}
              width={121}
              left={611}
              top={495}
              src={tag14}
            />
          }
          hover={
            <AbsoluteImage
              height={118}
              width={380}
              left={611}
              top={580}
              src={tag21}
            />
          }
        />
        <Tag
          tag={
            <AbsoluteImage
              height={87}
              width={155}
              left={1124}
              top={597}
              src={tag15}
            />
          }
          hover={
            <AbsoluteImage
              height={83}
              width={293}
              left={986}
              top={682}
              src={tag20}
            />
          }
        />
      </Page>
      <Page n={6}>
        <Tag
          tag={
            <AbsoluteImage
              height={87}
              width={199}
              left={772}
              top={768}
              src={tag10}
            />
          }
          hover={
            <AbsoluteImage
              height={83}
              width={319}
              left={772}
              top={846}
              src={tag22}
            />
          }
        />
        <Tag
          tag={
            <AbsoluteImage
              height={87}
              width={199}
              left={1315}
              top={528}
              src={tag11}
            />
          }
          hover={
            <AbsoluteImage
              height={83}
              width={420}
              left={1315}
              top={608}
              src={tag23}
            />
          }
        />
        <Tag
          tag={
            <AbsoluteImage
              height={87}
              width={138}
              left={115}
              top={226}
              src={tag12}
            />
          }
          hover={
            <AbsoluteImage
              height={87}
              width={407}
              left={115}
              top={311}
              src={tag24}
            />
          }
        />
      </Page>
    </>
  );
}
