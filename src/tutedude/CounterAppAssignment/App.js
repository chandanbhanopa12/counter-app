import React from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

import style from './counter.module.css';


class CounterAppAssignment extends React.Component{
    render(){
        let appName = "Counter ApplicationAssignment-2 Counter Application";
        return(
            <div>
                <div className={style.counterapp}>
                    <h2>{appName}</h2>
                </div>
                <div className={style.content}>
                    <CounterClass />
                    <CounterFunction />
                </div>
                
            </div>
        )
    }
}

export default CounterAppAssignment;