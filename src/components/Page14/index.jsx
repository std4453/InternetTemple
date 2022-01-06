import Page from "components/Page";
import { Absolute } from "components/Absolute";
import styles from "./index.module.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const numLanes = 10;
const areaWidth = 1920;
const baseWidth = 1000;
const baseTime = 3500;

const useDanmaku = () => {
  const listRef = useRef(
    new Array(numLanes).fill(0).map((_, index) => ({
      endTime: 0,
      items: [],
      index,
    })),
  );
  const [revision, setRevision] = useState(0);
  const bumpRevision = useCallback(() => setRevision((r) => r + 1), []);

  const update = useCallback(() => {
    const lanes = listRef.current;
    const now = new Date().getTime();
    let changed = false;
    for (const lane of lanes) {
      const filtered = lane.items.filter(({ endTime }) => endTime >= now);
      if (filtered.length < lane.items.length) {
        lane.items = filtered;
        changed = true;
      }
    }
    if (changed) {
      bumpRevision();
    }
  }, [bumpRevision]);
  useEffect(() => {
    let stopped = false;
    const frame = () => {
      update();
      if (!stopped) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
    return () => {
      stopped = true;
    };
  }, [update]);

  const send = useCallback(
    (content) => {
      // heristic结果，精确计算宽度太麻烦了
      const width = content.length * 36;
      // 哔哩哔哩模式：弹幕在 500px 左右时右侧对齐，然后匀速移动
      // 单位：px/ms
      const speed = (width + baseWidth) / baseTime;

      const startTime = new Date().getTime();
      const duration = areaWidth / speed;
      const endTime = startTime + duration;

      const lanes = listRef.current;

      // 泳道选择：总是选择结束时间最早的
      let selectedLane = -1;
      const now = new Date().getTime();
      // 特殊情况：多条弹幕为全空时随机选择（相对于哔哩哔哩是优先选择上方的）
      const emptyLanes = lanes.filter(({ endTime }) => endTime < now);
      if (emptyLanes.length > 0) {
        selectedLane = emptyLanes[~~(Math.random() * emptyLanes.length)].index;
      } else {
        let minTime = Infinity;
        for (const { index, endTime } of lanes) {
          if (endTime < minTime) {
            minTime = endTime;
            selectedLane = index;
          }
        }
      }
      // 兜底
      if (selectedLane === -1) {
        throw new Error();
      }

      lanes[selectedLane].endTime = endTime;
      lanes[selectedLane].items.push({
        content,
        startTime,
        endTime,
        duration,
      });
      bumpRevision();
    },
    [bumpRevision],
  );

  const elements = useMemo(
    () => (
      <div className={styles.danmaku}>
        {listRef.current.map(({ items, index }) => (
          <div className={styles.lane} key={index}>
            {items.map(({ startTime, duration, content }) => (
              <div
                key={startTime}
                className={styles.item}
                style={{
                  animationDuration: `${duration}ms`,
                }}
              >
                {content}
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
    [revision],
  );

  return [send, elements];
};

const pool = [
  "阿啊啊啊阿啊啊啊",
  "yyq考研上岸",
  "升職加薪",
  "阿啊啊啊阿啊啊啊阿啊啊啊",
  "考研",
  "升職加薪升職加薪升職加薪升職加薪升職加薪升職加薪升職加薪升職加薪",
];
const poolInterval = 100;
const poolPerSecond = 0.35;

const useDanmakuPool = (send) => {
  const trySend = useCallback(() => {
    const threshold = poolPerSecond * (poolInterval / 1000);
    if (Math.random() < threshold) {
      send(pool[~~(Math.random() * pool.length)]);
    }
  }, [send]);

  useEffect(() => {
    const interval = setInterval(trySend, poolInterval);
    return () => {
      clearInterval(interval);
    };
  }, [trySend]);
};

export default function Page14() {
  const [send, elements] = useDanmaku();

  useDanmakuPool(send);

  const inputRef = useRef();
  const handleSubmit = useCallback((event) => {
    event?.preventDefault();
    if (!inputRef.current.value) {
      return false;
    }
    send(inputRef.current.value);
    inputRef.current.value = "";
    return false;
  }, []);

  return (
    <Page n={14}>
      <form onSubmit={handleSubmit}>
        <Absolute
          component="input"
          className={styles.input}
          height={86}
          width={585}
          left={1145}
          top={798}
          ref={inputRef}
        />
        <Absolute height={524} width={1920} left={0} top={217}>
          {elements}
        </Absolute>
      </form>
    </Page>
  );
}
