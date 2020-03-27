class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            options: props.options
        };
    }
    handleDeleteOptions(){
        this.setState(()=>({
                options:[]
        }))
    }
    componentDidMount(){
        const options=JSON.parse(localStorage.getItem('options')) || [];
        this.setState(()=>({
            options
        }));
    }
    componentDidUpdate(_prevProps , prevState){
        if(prevState.options.length!==this.state.options.length){
           const json=JSON.stringify(this.state.options);
           localStorage.setItem('options',json);
        }
        
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleDeleteOption(optionToRemove){
        this.setState((prev)=>({
                options: prev.options.filter((option)=>{
                    return optionToRemove !== option
                })
            })

        );
    }
    handlePick(){
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }
    handleAddOption(option){
        if(!option){
            return 'Enter a valid value to add item';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Already in the list'
        }
        this.setState((prev)=>{
            return{
                options:prev.options.concat([option])
            }
        })
    }
    render(){
        const subtitle='Put your life in the hands of a computer.';
        return(
        <div>
            
            <Header  subtitle={subtitle} />
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
            <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        );
    }
}
IndecisionApp.defaultProps={
    options:[]
};
const Header=(props)=>{
    return (  
        <div>
            <h1>{props.title}</h1>
            {props.subtitle &&<h2>{props.subtitle}</h2>}
        </div>
    );
};
Header.defaultProps={
    title:'Indecision App'
};
// class Header extends React.Component{
//     render(){
//         return (  
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action=(props)=>{
    return (
        <div>
            <button disabled={!props.hasOptions}
            onClick={props.handlePick}> What should I do?</button>
        </div>
                  
    );
};
// class Action extends React.Component{
//     render(){
        
//     }
// }
class Options extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            {this.props.options.length===0 && <p>Please add an option to get started</p>}
            {
                this.props.options.map((option)=> (
                <Option handleDeleteOption={this.props.handleDeleteOption}
                key={option} 
                optionText={option}/>) )
            }
            
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
                <button onClick={
                    ()=>{this.props.handleDeleteOption(this.props.optionText)}}>Remove</button>
            </div>
        );
    }
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
        
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        
        const error=this.props.handleAddOption(option);
        this.setState(()=>{
            return{
                error,
            }
        })
        if(!error){
            e.target.elements.option.value='';
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button >Add Option</button>
                </form>
                
            </div>
        );
    }
}
const jsx = (
    <div>
        <IndecisionApp options={[]}/>
    </div>
);
ReactDOM.render(jsx,document.getElementById('app'))








































// const app={
//     title:'Indecision-App',
//     subtitle:'Put your life in the hands of the computer',
//     options:['one','two'],
// };
// var appRoot = document.getElementById('app');
// const onFormSubmit=(e)=>{
//     e.preventDefault();
//     const element=e.target.elements.option.value;
//     if(element){
//         app.options.push(element);
//         e.target.elements.option.value='';
//         render();
//     }
// }
// const removeAll=()=>{
//     app.options=[];
//     render();
// }
// const onMakeDecision=()=>{
//     const rand=Math.floor(Math.random()*app.options.length);
//     const option=app.options[rand];
//     alert(option)
// }
// const render=()=>{
//     const template=(
//         <div>
//             <h1> {app.title}</h1> 
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
//             <button onClick={removeAll}>Remove All</button>
//             <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
//             <ol>
//                 {
//                     app.options.map((option)=>{
//                         return <li key={option}>{option }</li>
//                     })
//                 }
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"/>
//                 <button>Add option</button>
//             </form>
//         </div>

//     );
//     ReactDOM.render(template, appRoot)
// }
// render();


// // const id1='my-id'
// // const addOne = () => {
// //     count++;
// //     renderCounterApp();
// // }
// // const minusOne = () => {
// //     count--;
// //     renderCounterApp();
// // }
// // const reset = () => {
// //     count=0;
// //     renderCounterApp();
// // }


// // const renderCounterApp=()=>{
// //     const templateTwo=(
    
// //         <div>
// //             <h1>
// //                 Count={count}
// //             </h1>
// //             <button onClick={addOne}>+1</button>
// //             <button onClick={minusOne}>-1</button>
// //             <button onClick={reset}>Reset</button>
// //         </div>
// //     );
// //     ReactDOM.render(templateTwo, app)
// // }
// // renderCounterApp();