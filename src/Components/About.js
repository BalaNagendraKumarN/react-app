import React, {useEffect} from "react";

class About extends React.Component{

    render() {
        return (
        <div className="div">
            <h1 className="text-3xl font-bold underline"> About! {this.props.title}</h1>
        </div>
      )
    }
}

export default About;