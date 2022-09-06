import React, {useEffect, useState} from "react";

export default function HooksExercise() {
    const [timer, setTimer] = useState(3);
    useEffect(() => {
        let timeout = setTimeout(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000)
        if (timer == 0) {
            clearTimeout(timeout)
        }
    }, [timer])
    return (
        <div>
            {timer}
        </div>
    )
}
