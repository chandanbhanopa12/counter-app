import React from "react";
import style from "./counter.module.css";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    increase(){
        this.setState({counter: this.state.counter+1});
    }
    decrease(){
        if(this.state.counter > 0){
            this.setState({counter: this.state.counter-1});
        }
        
    }
    render(){
        return(
            <div className={style.left}>
                <div className={style.apptitle}> Class Component</div>
                <div className={style.leftcontent} >
                    <button onClick={this.decrease} className={style.decrease}>Decrease</button>
                    <span className={style.result}>{this.state.counter}</span>
                    <button onClick={this.increase} className={style.increase}>Increase</button>
                </div>
            </div>
        )
    }
}
export default CounterClass;