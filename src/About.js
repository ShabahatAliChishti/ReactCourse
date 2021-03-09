import React,{useState} from 'react'
class About extends React.Component{
    constructor()
    {
        super();
        // this.state={
        //     name:'shabahat',
        //     age:23
        // }
        // console.warn("constructor");
        // console.warn("props",this.props)
    }
    componentDidMount()
    {
        //data passed by app.js
        // console.warn("props",this.props.name);
    }
    componentDidUpdate()
    {
        // console.warn("didupdate");
        console.warn("props update",this.props.name);

    }
    render()
    {
        console.log("render");
        return (
            <div>
                <h1>About us Component</h1>
                <h2>{this.props.name}</h2>
                {/* <h2>
                    {this.state.name}
                </h2>
                <button onClick={()=>{this.setState({name:'Shabahat Ali Chishti'})}}>
                    Update State
                </button> */}
            </div>
        )
    }
}
export default About;