'use client'

import Image from 'next/image'
import Countdown from 'react-countdown'

import Card from './components/Card';

type CountdownData = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  completed: boolean;
}

export default function Home() {
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownData) => {
    if (completed) {      
      return (
        <div className="flex self-center mt-4">
          <p className="animate-bounce font-bold text-cyan-800 text-lg">
            É hoje, chegou o grande dia! 🎉
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex self-center gap-2">
          <Card value={days} label="dia" />
          <Card value={hours} label="hora" />
          <Card value={minutes} label="minuto" />
          <Card value={seconds} label="segundo" />
        </div>
      );
    }
  };

  return (
    <main className="px-2 py-5 flex min-h-screen w-screen flex-col">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-cyan-800 text-lg">
          FM WEDDING 💍
        </h1>
        <p className="font-normal text-center leading-none">
          Entre aqui sempre que a ansiedade bater e verá que está mais perto do que imagina...
        </p>
      </div>

      <div className="flex self-center justify-start px-3 pb-6 bg-cyan-50 mt-6 mb-3">
        <Image
          className="rounded my-4"
          src="/fm.jpg"
          alt="FM"
          width={200}
          height={60}
          priority
        />
      </div>

      <Countdown
        date={new Date(2024, 9, 4)}
        renderer={renderer}
      />

      <p className="font-light mt-8 underline text-center text-xs text-cyan-950">
        “Assim, eles já não são dois, mas sim uma só carne. Portanto, ninguém separe o que Deus uniu.”
      </p>
    </main>
  )
}
