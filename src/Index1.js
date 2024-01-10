import React from "react";
import "./index1.css"
import Img from "./image/whitout light.jpg";
import Img1 from "./image/lighting2.jpg";
   export default class Class extends React.Component{
    constructor(){
        super();
        this.state={status:true}
        this.call=this.handleChange.bind(this);
    }
    handleChange(){
        // alert("hi")
        this.setState({status:!this.state.status});
    }
    render(){
        return(
            <div className="box">
            <div>{this.state.status === true ?<img className="im1" src={Img}></img> : <img className="im2" src={Img1}></img> } </div>
             <button className="b1" onClick={this.call}>{this.state.status === true ?"ON" :"OFF" }</button>
            </div>
        )
    }
 }