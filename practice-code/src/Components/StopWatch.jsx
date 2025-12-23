// import { useState } from "react";

// function StopWatch() {
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [timerId, setTimerId] = useState(null);

//   const start = () => {
//     if (timerId) return;

//     const id = setInterval(() => {
//       setSeconds(prev => {
//         if (prev === 59) {
//           setMinutes(m => m + 1);
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 1000);

//     setTimerId(id);
//   };

//   const stop = () => {
//     clearInterval(timerId);
//     setTimerId(null);
//   };

//   const reset = () => {
//     clearInterval(timerId);
//     setTimerId(null);
//     setMinutes(0);
//     setSeconds(0);
//   };

//   return (
//     <div style={cardStyle}>
//       <h1>
//         {String(minutes).padStart(2, "0")}:
//         {String(seconds).padStart(2, "0")}
//       </h1>

//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// const cardStyle = {
//   width: "200px",
//   padding: "20px",
//   margin:"20px auto",

//   textAlign: "center",
//   borderRadius: "10px",
//   backgroundColor:"#ccc",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
// };

// export default StopWatch;

import { useEffect, useState } from "react";

export default function StopWatch() {

    const [sec, setSec] = useState(0)

    const [isRunning, setIsRunning] = useState(false)
    const [min, setMin] = useState(0)


    useEffect(() => {

        if (!isRunning) {
            return
        }
        const intervalId = setInterval(() => setSec((prev) => {
            if (prev === 10) {
        //    console.log({prev,min},"10")
                setMin(prevMin => prevMin + 1);
                return 0;
            } else {
             console.log({prev,min})
                return prev + 1;
            }

        }), 1000)
   
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning])

    function start() {
        setIsRunning(true)

    }
    function stop() {
        setIsRunning(false)

    }
    function reset() {
        setIsRunning(false)
        setSec(0)
        setMin(0)
        // setIntervalId()
    }
    const containerStyle = {
        textAlign: "center",
        marginTop: "40px",
    };
    return (<><div style={containerStyle}><h1>STOPWATCH</h1>
        <h1>{min}:{sec}</h1>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button></div></>)


}
