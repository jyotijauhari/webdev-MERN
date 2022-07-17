import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(){
        super(); //give this of this class
        this.state = {
            tasks: [{task:'do homework', id:1},{task:'drink water', id:2},{task:'go for walk', id:3}],
            currTask : ''
        }
    }

    handleChange = (e)=>{
        //e is object
        console.log(e.target.value);
        this.setState({
                currTask : e.target.value
             })   
    }

    handleSubmit = ()=>{
        this.setState({
            tasks : [...this.state.tasks, {task:this.state.currTask, id:this.state.tasks.length+1}],
            currTask : ''
        })
    }

    handleDelete = (id) => {
        let narr = this.state.tasks.filter((task)=>{
            return task.id !== id
        })
        this.setState({
            tasks : [...narr]
        })
    }
    render() {
    return (
      <div>
          <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>Submit</button> 

          <ul>
              {
                  this.state.tasks.map((task)=>(
                      <li key={task.id}>
                          <div>{task.task}</div>
                          <button onClick={() => this.handleDelete(task.id) }>Delete</button>
                      </li>
                  ))
              }
          </ul>
      </div>
    )
  }
}
