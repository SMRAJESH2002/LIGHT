import React from "react"
import "./counter.css"
export default class Counter extends React.Component{
    constructor(){
        super();
        this.state={add:0}
        
        this.call=this.increment.bind(this);
        this.min=this.min.bind(this);
        this.reset=this.reset.bind(this);
    }
    increment(){
        this.setState({add:this.state.add+1})
       
    }
min(){
    if(this.state.add>0)
    this.setState({add:this.state.add-1})

}
reset(){
    this.setState({add:0})
}
render(){
return(
<div className="count">
    <h1>{this.state.add}</h1>
    <button onClick={this.call}> Plus</button>
    <button onClick={this.min}>Min</button>
    <button onClick={this.reset}>reset</button>
</div>
)
}
}
