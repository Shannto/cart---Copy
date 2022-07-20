import React, { Component } from 'react'
import Formsheet  from './form'
import shortid from 'shortid';
import TableView from './tableview';

// import viewType from './viewType';
import Tonsheet from './tonForm';
import { Row, Label, Input, Form, FormGroup, Col, Container,Button } from "reactstrap";
import Control from './control';


class Index extends Component {
   state={todos:[
    {
       
    }],
    total:0,
    bundleS:true,
    tonS:false,
    ridgingS:false
  }
  
   createTodo=todo=>{
    todo.id= shortid.generate();
    const todos=[todo, ...this.state.todos];
    this.setState({todos});
    this.setState({
      total:this.state.total+todo.price
    })
    console.log(this.state);
   }

   handleRadio=(event)=>{
    this.setState({
        bundleS:false,
        tonS:false,
        ridgingS:false,
        [event.target.name]:true
    })
  }

  resetForm=(event)=>{
    this.setState({
      todos:[
        {
           
        }],
        total:0,
        bundleS:true,
        tonS:false,
        ridgingS:false
      
    })
  }

  deleteItem = (item) => {
		const todos = this.state.todos.filter(todo =>item.id !=todo.id);
		this.setState(
      { todos ,
      total:this.state.total-item.price});
	};


  render() {
    return (
      <div>
        
          
        <Control createTodo={this.createTodo} resetForm={this.resetForm} />


        {/* <Controller bundleS={this.state.bundleS} tonS={this.state.tonS} ridgingS={this.state.ridgingS} handleRadio={this.handleRadio} /> */}
        

        {/* {this.state.bundleS? <Formsheet createTodo={this.createTodo} /> : null} */}

        {/* {this.state.tonS? <Tonsheet createTodo={this.createTodo} /> : null} */}

        {/* <viewType  bundle={this.state.bundle} ton={this.state.bundle} ridging={this.state.ridging}/> */}
      
      
        <TableView
				todos={this.state.todos} total={this.state.total}
        viewTotal={this.viewTotal}
        deleteItem={this.deleteItem}
			/>


      
      </div>
    )
  }
}

export default Index;

// id:'',pieces: 0, feet: 0, mm: "", bundle: 0,price:0