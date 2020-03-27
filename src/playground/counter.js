import React from 'react'
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value1:1,
            value2:1,
            value3:1
        }
        this.incrementCounter1=this.incrementCounter1.bind(this)
        this.incrementCounter2=this.incrementCounter2.bind(this)
        this.incrementCounter3=this.incrementCounter3.bind(this)
    }
    componentDidMount(){
        setInterval(this.incrementCounter2,100)
        setInterval(this.incrementCounter1,1000)
        
        setInterval(this.incrementCounter3,7000)
    }
    componentDidUpdate(_prevProps,prevState){
        console.log(prevState,this.state)
    }
    incrementCounter1(){
        this.setState((prevState)=>({
            value1: prevState.value1+1
        }))
        console.log('Hii')
    }
    incrementCounter2(){
        this.setState((prevState)=>({
            value2: prevState.value2+1
        }))
        console.log('Hii')
    }
    incrementCounter3(){
        this.setState((prevState)=>({
            value3: prevState.value3+1
        }))
        console.log('Hii')
    }
    render(){
        return (
            <div>
            <h1>{this.state.value1}</h1>
            <h1>{this.state.value2}</h1>
            <h1>{this.state.value3}</h1>   
            </div>
        );
    }
}
