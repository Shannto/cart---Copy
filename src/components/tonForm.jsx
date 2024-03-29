import React from "react";
import { createRef } from "react";
import { Row, Label, Input, Form, FormGroup, Col, Container,Button } from "reactstrap";

class Tonsheet extends React.Component {
  state = {
     pieces: 0, feet: 0, mm: 0, bundle: 0,price:0,divisor:0 
  };

  handleChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value,
      },
      ()=>
      { if(this.state.mm > 260 && this.state.mm<420){
        this.setState({
          divisor:Math.floor(1344/this.state.feet)
        })
        
      }
      else if(this.state.mm == 48 || this.state.mm>340){
        this.setState({
          divisor:Math.floor(1053/this.state.feet)
        })
      }
      else{
        this.setState({
          divisor:Math.floor(1692/this.state.feet)
        })
      }
        this.setState({
        
        price:Math.floor((this.state.pieces*this.state.bundle)/this.state.divisor)})},
    );
    
  };
  
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ pieces: 0, feet: 0, mm: 0, bundle: 0,price:0,divisor:0 });
    
  };

  handleEnter = (event) => {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    if (event.key.toLowerCase() === "enter" && event.target.name!=="bundle") {
      form.elements[index + 1].focus();
      event.preventDefault();
    }
    if (event.key.toLowerCase() === "enter" && event.target.name==="bundle") {
      form.elements[index - 3].focus();
      
    }
  };


  render() {
    return (
      <div>
          
         
          {/* <Col md={12} className="text-center"><Controller/></Col> */}



          <Form className="my-1" onSubmit={this.handleSubmit}>
          <Col md={12} className="h5 mx-auto ">
            <p className="text-center">Cash memo: Ton
            <Button type='submit' className="btn-sm mx-1" onKeyDown={this.handleEnter}>Add more</Button>
            </p>

          </Col>

            <Row>

            <Col md={2} xs={6}><FormGroup>
                  <Label for="examplepieces">Pieces</Label>
                  <Input
                  autoFocus
                    id="examplepieces"
                    name="pieces"
                    autoComplete="off"
                    type="tel"
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnter}
                    
                  />
                </FormGroup>
              </Col> 

            <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="examplefeet">Feet</Label>
                  <Input
                    id="examplefeet"
                    name="feet"
                    type="tel"
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnter}
                  />
                </FormGroup>
              </Col>

              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="examplemm">M.M.</Label>
                  <Input
                    id="examplemm"
                    name="mm"
                    type="tel"
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnter}
                  />
                </FormGroup>
              </Col>

              


              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="examplebundle">Ton</Label>
                  <Input
                    id="examplebundle"
                    name="bundle"
                    type="tel"
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnter}
                  />
                </FormGroup>
              </Col>

              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="exampleprice">Price</Label>
                  <Input id="exampleprice" name="price" value={this.state.price} />
                </FormGroup>
              </Col>
              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="exampledivisor">Divisor</Label>
                  <Input id="exampledivisor" name="divisor" value={this.state.divisor} />
                </FormGroup>
                
              </Col>
              {/* <Col className="d-flex justify-content-end" >
                
                <Button type='submit' >Add more</Button>
              </Col> */}
                </Row></Form></div>)}
}

export default Tonsheet;