import React from 'react';

import './App.css';
import CountdownTimer from './components/CountdownTimer';

export default function App() {
  const THREE_DAYS_IN_MS = 1 * 1 * 2 * 60 * 1000;
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

  return (
    <div className="app">
      <h1>Countdown Timer</h1>
      <div>
  
  <h2>Expires after 2 mins!!!</h2>
  <CountdownTimer targetDate={dateTimeAfterThreeDays} />
</div>
    
<div>
  
      <h2>Expires after 7 days!!!</h2>
      <CountdownTimer targetDate={dateTimeAfterSevenDays} />
</div>
    </div>
  );
}
