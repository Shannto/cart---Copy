import React from 'react';
import Formsheet from './form'
import Tonsheet from './tonForm';
import Ridgingsheet from './ridgingForm';
import {Button} from 'reactstrap'

class Control extends React.Component{
    state={
        bundleS:true,
        tonS:false,
        ridgingS:false
    }

    handleRadio=(event)=>{
        this.setState(
            {
        bundleS:false,
        tonS:false,
        ridgingS:false,
        [event.target.name]:event.target.value
            },()=>{console.log(this.state)}
        )
    }

    render(){
        return(
                <div className='text-center my-3'>
                     <input type="radio" name="bundleS" onChange={this.handleRadio} checked={this.state.bundleS} className='mx-2' />Bundle
                    
                    <input type="radio" name="tonS" onChange={this.handleRadio} checked={this.state.tonS} className='mx-2' />Ton

                    <input type="radio" name="ridgingS" onChange={this.handleRadio} checked={this.state.ridgingS} className='mx-2' />Others

                    <button onClick={this.props.resetForm} className="mx-2 btn btn-outline-success btn-sm"> Reset</button>

                    

                    <div>
                        <br />
                        {this.state.bundleS? <Formsheet createTodo={this.props.createTodo}/>:null}

                        {this.state.tonS? <Tonsheet
                        createTodo={this.props.createTodo}/>:null}
                        
                        {this.state.ridgingS? <Ridgingsheet
                        createTodo={this.props.createTodo}/>:null}
                    </div>
                </div>
            
        )
    }
}

export default Control;