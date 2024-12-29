import React from 'react';
import { Timer } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';

export function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2024-12-31'));

  return (
    <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm text-center" role="timer" aria-label="Presale countdown timer">
      <Timer className="w-12 h-12 text-yellow-400 mx-auto mb-4" aria-hidden="true" />
      <h3 className="text-xl font-semibold mb-2">Time Remaining</h3>
      <p className="text-3xl font-bold text-yellow-400">
        <span aria-label={`${days} days`}>{days}d</span>{' '}
        <span aria-label={`${hours} hours`}>{hours}h</span>{' '}
        <span aria-label={`${minutes} minutes`}>{minutes}m</span>{' '}
        <span aria-label={`${seconds} seconds`}>{seconds}s</span>
      </p>
    </div>
  );
}