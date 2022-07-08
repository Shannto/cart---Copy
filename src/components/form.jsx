import React from "react";
import { Row, Label, Input, Form, FormGroup, Col, Container,Button } from "reactstrap";


class Formsheet extends React.Component {
  state = {
     pieces: 0, feet: 0, mm: "", bundle: 0,price:0 
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      },
      ()=>
      {this.setState({price:Math.floor((this.state.pieces*this.state.bundle)/Math.floor(72/this.state.feet))})},
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
            <p className="text-center mt-2">Cash memo: Bundle</p>
          </Col>
          {/* <Col md={12} className="text-center"><Controller /> */}



          <Form className="my-2" onSubmit={this.handleSubmit}>
            <Row> <Col md={3} xs={6}><FormGroup>
                  <Label for="examplepieces">Pieces</Label>
                  <Input
                    id="examplepieces"
                    name="pieces"
                    
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md={3} xs={6}>
                <FormGroup>
                  <Label for="examplefeet">Feet</Label>
                  <Input
                    id="examplefeet"
                    name="feet"
                    
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md={3} xs={6}>
                <FormGroup>
                  <Label for="examplebundle">Bundle</Label>
                  <Input
                    id="examplebundle"
                    name="bundle"
                    
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="exampleprice">Price</Label>
                  <Input id="exampleprice" name="price" value={this.state.price} />
                </FormGroup>
              </Col>
              <Col md={1} >
                
                  <Label for="exampleprice"></Label>
                <Button type='submit'>Add more</Button>
                
              </Col></Row></Form></div></div>)}
}

export default Formsheet;

// // twoCalls = event => {
// //   this.grabValue(event)
// //   // this.resultStore(event)
// // }
// grabMM=(event)=>{
//   this.price=event.target.value
//   console.log(this.price)
//   // this.price=this.pieces
// }

// grabValue=(event)=>{
//   // var name=event.target.name.value
//   // this.name=event.target.value
//   // console.log(this.mm);
//   // console.log(this.feet);
//   // console.log(this.pieces);
//   // console.log(this.bundle);
//   // this.price=(this.pieces*this.bundle)/(72/this.feet)
// }

//     results=this.results+this.x

