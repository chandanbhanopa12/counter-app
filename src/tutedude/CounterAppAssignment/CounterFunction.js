import { useState } from "react";
import style from "./counter.module.css";
let CounterFunction = () => {
    let [ counter, setCounter ] = useState(0);
    let increase = () => {
        setCounter(counter+1);
    }
    let decrease = ()=> {
        if(counter > 0){
            setCounter(counter-1);
        }
    }
    return(
        <div className={style.right}>
            <div className={style.apptitle}> Functional Component</div>
            <div className={style.rightcontent} >
                <button className={style.decrease} onClick={decrease}>Decrease</button>
                <span className={style.result}>{counter}</span>
                <button className={style.increase} onClick={increase}>Increase</button>
            </div>
        </div>
    )
}

export default CounterFunction;