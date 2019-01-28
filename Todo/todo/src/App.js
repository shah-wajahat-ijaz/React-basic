import React, { Component } from 'react';
import Todos from './components/Todo';
import './App.css';

class App extends Component {
  state={
    todos:[{
      id:1,
      title:"Take out the trush",
      completed:true
    },
    {
      id:2,
      title:"Dinner with Family",
      completed:false,
    },
    {
      id:3,
      title:"Meeting with boss",
      completed:false,
    }]
  }
  //Toggle completed 
  markCompleted=(id)=>{
    this.setState({
      todos:this.state.todos.map(todo =>{
        if(todo.id === id)
        {
           todo.completed =!todo.completed
        } 
        return todo;
      })
      
    });
}
  render() {
   
    return (
      <div className="App">
       <Todos todos={this.state.todos } markCompleted={this.markCompleted} />
      </div>
    );
  }
}

export default App;
