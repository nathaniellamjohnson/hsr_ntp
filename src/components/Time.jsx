import React, { useEffect } from "react";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dayFormatting(day) {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

export default function App() {
    const [time, setTime] = React.useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
          }, 1000);
      
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="flex flex-row text-2xl">
            <h1>{dayNames[time.getDay()]}, {monthNames[time.getMonth()]} {dayFormatting(time.getDate())} - {time.getHours() % 12}:{time.getMinutes().toString().padStart(2, '0')}:<span>{time.getSeconds()}</span> {time.getHours() >= 12 ? 'PM' : 'AM'}</h1>
        </div>
    );
}