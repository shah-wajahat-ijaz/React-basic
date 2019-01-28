import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Proptype from 'prop-types';

class Todos extends Component {
    
  render() {
   
    return (
        this.props.todos.map((todo)=>
        <TodoItem key= {todo.id} todo={todo} markCompleted={this.props.markCompleted}/>
        
        )
    );
  }
  
  }
  Todos.Proptype= {
    todos:Proptype.array.isRequried
}

export default Todos;
