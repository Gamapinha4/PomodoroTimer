'use client'
import Header from "@/components/Headet";
import Timer from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { BellElectric, Book, Pause, Play } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";


export default function Home() {
  const [time, setTime] = useState(99);
  const [isRunning, setIsRunning] = useState(false);

  const enumTimer = {
    SHORT_WORK: 15 * 60,
    LONG_WORK: 30 * 60,
    SHORT_BREAK: 5 * 60,
    LONG_BREAK: 15 * 60,
  } as const;

  const getTime = (type: keyof typeof enumTimer) => enumTimer[type];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval!);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isRunning, time]);

  function startTimer() {
    toast("Timer started !", { icon: '🚀', position: "bottom-center" });
    setIsRunning(true);
  }

  function pauseTimer() {
    toast("Timer paused !", { icon: '⏸️', position: "bottom-center" });
    setIsRunning(false);
  }

  return (
    <div className="">
      <Header/>
      <Timer time={time}/>

      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={startTimer} className="bg-blue-500 hover:bg-blue-400"><Play/> Start</Button>
        <Button onClick={pauseTimer} variant={'destructive'}><Pause/> Pause</Button>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
        <div className="flex gap-4">
          <Button onClick={() => setTime(getTime('SHORT_WORK'))} className="bg-yellow-500 hover:bg-yellow-400"><Book/>Short time</Button>
          <Button onClick={() => setTime(getTime('LONG_WORK'))} className="bg-red-500 hover:bg-red-400"><Book/>Long time</Button>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => setTime(getTime('SHORT_BREAK'))} className="bg-yellow-500 hover:bg-yellow-400"><BellElectric/> Short break</Button>
          <Button onClick={() => setTime(getTime('LONG_BREAK'))} className="bg-red-500 hover:bg-red-400"><BellElectric/> Long break</Button>
        </div>
      </div>
    </div>
  );
}
