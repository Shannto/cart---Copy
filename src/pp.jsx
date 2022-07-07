import React from 'react'


class App extends React.Component{
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
                <div>
                     <input type="radio" name="bundleS" onChange={this.handleRadio} checked={this.state.bundleS} />Bundle
                    
                    <input type="radio" name="tonS" onChange={this.handleRadio} checked={this.state.tonS} />Ton

                    <input type="radio" name="ridgingS" onChange={this.handleRadio} checked={this.state.ridgingS} />Ridging

                    <div>
                        {this.state.bundleS? <h1>Bundle</h1>:null}
                        {this.state.tonS? <h1>ton</h1>:null}
                        {this.state.ridgingS? <h1>ridging</h1>:null}
                    </div>
                </div>
            
        )
    }
}

export default App