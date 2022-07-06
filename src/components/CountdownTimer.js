import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

const ExpiredNotice = ({counter}) => {
  return (
    <div class="container ">
    <DateTimeDisplay value="00" type={"Days"} counter={counter}/>
    :
    <DateTimeDisplay value="00" type={"Hours"} counter={counter} />
    :
    <DateTimeDisplay value="00" type={"Mins"} counter={counter} />
    :
    <DateTimeDisplay value="00" type={"Seconds"}counter={counter} />
  </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
   
  return (
    <>
      <div class="container ">
        <DateTimeDisplay value={days} type={"Days"} countw={false} />
        :
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        :
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        :
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const  counter=days+hours+minutes+seconds
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice counter={counter} />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
