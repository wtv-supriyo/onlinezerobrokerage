"use client";
import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
    
      useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);
    
        const interval = setInterval(() => {
          const now = new Date();
          const diff = targetDate - now;
    
          if (diff <= 0) {
            clearInterval(interval);
            setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
            return;
          }
    
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const mins = Math.floor((diff / (1000 * 60)) % 60);
          const secs = Math.floor((diff / 1000) % 60);
    
          setTimeLeft({ days, hours, mins, secs });
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
  return (
    <div className="mt-16 bg-green-900/30 rounded-lg py-4 md:px-8 sm:px-4 px-2 text-green-300 font-mono text-lg tracking-widest flex md:gap-6 sm:gap-4 gap-2 justify-center">
          <div>
            <div className="md:text-4xl text-2xl font-bold">{timeLeft.days}</div>
            <div >DAYS</div>
          </div>
          <div>
            <div className="md:text-4xl text-2xl font-bold">{timeLeft.hours}</div>
            <div>HOURS</div>
          </div>
          <div>
            <div className="md:text-4xl text-2xl font-bold">{timeLeft.mins}</div>
            <div>MINUTES</div>
          </div>
          <div>
            <div className="md:text-4xl text-2xl font-bold">{timeLeft.secs}</div>
            <div>SECONDS</div>
          </div>
        </div>
  )
}

export default CountdownTimer