import React from "react";
import { Row, Label, Input, Form, FormGroup, Col, Container,Button } from "reactstrap";


class Ridgingsheet extends React.Component {
  state = {
     pieces: 0, mm: "",price:0,unit:0 
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      },
      ()=>
      {this.setState({price:Math.floor(this.state.pieces*this.state.unit)})},
    );
    
  };
  
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
  };

  render() {
    return (
      <div>
        <div className="container">
          
          <Col md={12} className="h5 mx-auto ">
            <p className="text-center mt-2">Cash memo: Others</p>
          </Col>
          
          <Form className="my-2" onSubmit={this.handleSubmit}>
            <Row> <Col md={2} xs={4}><FormGroup>
                  <Label for="examplepieces">Pieces</Label>
                  <Input
                    id="examplepieces"
                    name="pieces"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md={3} xs={4}>
                <FormGroup>
                  <Label for="exampleunit">Unit Prices</Label>
                  <Input
                    id="exampleunit"
                    name="unit"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md={2} xs={4}><FormGroup>
                  <Label for="examplemm">M.M.</Label>
                  <Input
                    id="examplemm"
                    name="mm"
                    
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>

              

              <Col md={4}>
                <FormGroup>
                  <Label for="exampleprice">Price</Label>
                  <Input id="exampleprice" name="price" value={this.state.price} />
                </FormGroup>
              </Col>
              <Col md={1}>
                
                  <Label for="exampleprice"></Label>
                <Button type='submit'>Add more</Button>
                
              </Col></Row></Form></div></div>)}
}

export default Ridgingsheet;

