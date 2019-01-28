import React, { Component } from 'react';
import Proptype from 'prop-types';

class TodoItem extends Component {
    getStyle=()=>{
        return{
            background:"#f4f4f4",
            padding:"10px",
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 
            'line-through': 'none'
        }
       
    }
    
    render() {
        const {id,title} = this.props.todo
        return (
            <div style= {this.getStyle()}>
           
                <p>
                <input type ="checkbox" onChange={this.props.markCompleted.bind(this,id)} /> {" "}
                {title}</p>
            </div>
        );
    }

}
TodoItem.Proptype={
    todo:Proptype.object.isRequired
}

export default TodoItem;