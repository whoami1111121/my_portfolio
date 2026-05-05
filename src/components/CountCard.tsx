"use client";

import { useEffect, useState, useRef } from "react";
import { animate } from "framer-motion";

const CountCard = ({
  number,
  type,
  content,
}: {
  number: number;
  type: string;
  content: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, number, {
        duration: 4,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [inView, number]);

  return (
    <div ref={ref} className="relative w-full">
      <div className="group relative rounded-xl p-[2px] z-10">
        <div
          className="
            absolute inset-0 rounded-xl opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
            bg-[linear-gradient(135deg,#13fdfd_0%,#06131b_45%,#06131b_55%,#13fdfd_100%)]
          "
        />
        <div className="relative z-10 h-full w-full rounded-[10px] bg-cardbg p-4 sm:p-6 lg:p-8 overflow-hidden">
          <div className="flex gap-4 flex-col items-center justify-center">
            <div>
              <h1 className="text-2xl md:text-4xl heading">
                {count}
                {type}
              </h1>
            </div>
            <div className="contextText">{content}</div>
          </div>
        </div>
      </div>
      <div className="bg-foreground/10 absolute top-[3px] left-[3px] w-full h-full rounded-xl z-1"></div>
    </div>
  );
};

export default CountCard;
