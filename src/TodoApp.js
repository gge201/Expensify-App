import React from 'react'
import ReactDOM from 'react-dom'
class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.handleAddTodo=this.handleAddTodo.bind(this)
        this.handleToggleTodo=this.handleToggleTodo.bind(this)
        this.handleDeleteTodo=this.handleDeleteTodo.bind(this)
        this.handleDeleteAllTodo=this.handleDeleteAllTodo.bind(this)
        this.handleUpTodo=this.handleUpTodo.bind(this)
        this.handleDownTodo=this.handleDownTodo.bind(this)
        this.handleMarkAllTodo=this.handleMarkAllTodo.bind(this)
        this.handleUnmarkAllTodo=this.handleUnmarkAllTodo.bind(this)
        this.handleEditTodo=this.handleEditTodo.bind(this)
        this.state={
            todo:[]
        }
    }
    componentDidUpdate(){
        const json=JSON.stringify(this.state.todo)
        localStorage.setItem('todo',json);
    }
    componentDidMount(){
        const todo=JSON.parse(localStorage.getItem('todo')) || [];
        this.setState(() => ({todo}) );
    }

    handleMarkAllTodo(){
        let count=0;
        this.state.todo.map((item)=>{
            if(!item.complete){
                count++;
                this.handleToggleTodo(item.text)
            }
        })
        if(count===0){
            alert('No elements to Mark')
        }
    }
    handleEditTodo(updateText,Text){
        this.setState((prevState)=>{
            prevState.todo.map((item)=>{
                if(item.text===Text){
                    item.text=updateText
                }
            })
            return{
                todo:prevState.todo
            }
        })
    }
    handleUnmarkAllTodo(){
        let count=0;
        this.state.todo.map((item)=>{
            if(item.complete){
                count++;
                this.handleToggleTodo(item.text)
            }
        })
        if(count===0){
            alert('No elements to Unmark')
        }
    }
    handleUpTodo(Text){
        let index=-1;
        this.state.todo.map((value , pos) => {
            if (value.text === Text){
                index = pos;
            }
        })
        this.setState((prevState)=>{
            if(index===0){
                let element=prevState.todo[prevState.todo.length-1]
                prevState.todo[prevState.todo.length-1]=prevState.todo[index]
                prevState.todo[index]=element
                
            }
            else{
                let element=prevState.todo[index-1]
                prevState.todo[index-1]=prevState.todo[index]
                prevState.todo[index]=element
            }
            return{
                todo:prevState.todo
            }
        })
    }
    handleDownTodo(Text){
        let index=-1;
        this.state.todo.map((value , pos) => {
            if (value.text === Text){
                index = pos;
            }
        })
        this.setState((prevState)=>{
            if(index===prevState.todo.length-1){
                let element=prevState.todo[0]
                prevState.todo[0]=prevState.todo[index]
                prevState.todo[index]=element
                
            }
            else{
                let element=prevState.todo[index+1]
                prevState.todo[index+1]=prevState.todo[index]
                prevState.todo[index]=element
            }
            return{
                todo:prevState.todo
            }
        })
    }
    handleDeleteAllTodo(){
        if(this.state.todo.length===0){
            alert('No elements to delete')
            return;
        }
        this.setState(()=> {return{todo : []}})
    }
    handleToggleTodo(Text){
        this.setState((prevState)=>({
            todo:prevState.todo.filter((item)=>{
                if(item.text===Text){
                    item.complete= !item.complete;
                }
                return item;
            })
        }))
    }
    handleAddTodo(Text){
        let isPresent=0;
        this.state.todo.map((item)=>{
            if(item.text===Text){
                alert('Add something else. Already in the list')
                isPresent=1;
                return;
            }
        }
        )
        if(isPresent){
            return;
        }
        this.setState((prevState)=>{
            return({
                todo : prevState.todo.concat([{text:Text,complete:false}])
            });
        })
    }
    handleDeleteTodo(Text){
        this.setState((prevState)=>({
            todo:prevState.todo.filter((item)=>{
                    if(item.text!=Text)
                    {
                        return item;
                    }
            }
            )
        }))
    }
    render(){
        return(
            <div>
            <Header 
            handleAddTodo={this.handleAddTodo}/>
            <List 
            handleEditTodo={this.handleEditTodo} 
            handleUpTodo={this.handleUpTodo} 
            handleDownTodo={this.handleDownTodo} 
            handleDeleteTodo={this.handleDeleteTodo} 
            todo={this.state.todo} 
            handleToggleTodo={this.handleToggleTodo}/>
            <ActionBar 
            handleMarkAllTodo={this.handleMarkAllTodo} 
            handleUnmarkAllTodo={this.handleUnmarkAllTodo} 
            handleDeleteAllTodo={this.handleDeleteAllTodo}/>
            </div>
        );
    }
}
class Header extends React.Component{
    constructor(props){
        super(props);
        this.addTodo=this.addTodo.bind(this)
    }
    addTodo(e){
        e.preventDefault();
        this.props.handleAddTodo(e.target.elements.element.value)
        e.target.elements.element.value='';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addTodo}>
                    <input 
                    type="text" 
                    className="giveInput" 
                    placeholder="Add Something" 
                    name="element">
                    </input>
                    <button 
                    className="button3">
                        +
                    </button>
                </form>
            </div>
        );
    }
}
class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.todo)
        return(
            <div>{
                this.props.todo.map((item)=> <Item 
                                handleEditTodo={this.props.handleEditTodo}
                                key={item.text} 
                                todo={item} 
                                handleToggleTodo={this.props.handleToggleTodo}
                                handleDeleteTodo={this.props.handleDeleteTodo}
                                handleUpTodo={this.props.handleUpTodo}
                                handleDownTodo={this.props.handleDownTodo}/>)
            }
            </div>
        );
    }
}
class Item extends React.Component{
    constructor(props){
        super(props);
        this.checkBox=this.checkBox.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.handleEditContent=this.handleEditContent.bind(this);
        this.upTodo=this.upTodo.bind(this)
        this.downTodo=this.downTodo.bind(this)
    }
    checkBox(e){
        this.props.handleToggleTodo(this.props.todo.text)
        
    }
    onDelete(){
        this.props.handleDeleteTodo(this.props.todo.text)
    }
    upTodo(){
        this.props.handleUpTodo(this.props.todo.text)
    }
    downTodo(){
        this.props.handleDownTodo(this.props.todo.text)
    }
    handleEditContent(e){
        if(e.key==='Enter')
        {
            e.preventDefault();
            if(e.target.innerText===''){
                alert('Enter Something please')
                return;
            }
            this.props.handleEditTodo(e.target.innerText,this.props.todo.text)
            e.target.contentEditable=false;
            e.target.contentEditable=true;
            e.target.value='';
        }
    }
    render(){
        return(
                <li className="LI">
                    <input type="checkbox" name="check" checked={this.props.todo.complete} className="check" onClick={this.checkBox}/>
                    <span onKeyDown={this.handleEditContent} textDecoration= {(!this.props.todo.complete) ? "none": "strike-through" } contentEditable={!this.props.todo.complete} > {this.props.todo.text}</span>
                    <button className='fa fa-arrow-up' onClick={this.upTodo}/>
                    <button className='fa fa-arrow-down' onClick={this.downTodo}></button>
                    <button className="fa fa-trash" onClick={this.onDelete}>  </button>    
                </li>
        );
    }
}
class ActionBar extends React.Component{
    render(){
        return(
            <div>
                <button 
                onClick={this.props.handleDeleteAllTodo} 
                className="button3">Delete All</button>
                <button 
                onClick={this.props.handleMarkAllTodo} 
                className="button3">Mark All</button>
                <button 
                onClick={this.props.handleUnmarkAllTodo} 
                className="button3"> Unmark All</button>
            </div>
        );
    }
}
ReactDOM.render(<TodoApp />,document.getElementById('app'))