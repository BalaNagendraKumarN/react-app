import React, {Component} from "react";

class Home extends React.Component{
    
    sendData = () => {
        this.props.parentCallback("From Home");
        console.log('hi');
    }

    render() {
        return (
        <div className="div" onLoad={() => this.sendData}>
            <h1 className="text-3xl font-bold underline"> Hello world!{this.props.title} </h1>
        </div>
      )
    }
}

export default Home;