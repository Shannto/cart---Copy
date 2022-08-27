import React from "react";
import {
  Row,
  Label,
  Input,
  Form,
  FormGroup,
  Col,
  Container,
  Button,
} from "reactstrap";

class Ridgingsheet extends React.Component {
  state = {
    pieces: 0,
    mm: "",
    price: 0,
    unit: 0,
  };

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.setState({
          price: Math.floor(this.state.pieces * this.state.unit),
        });
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ pieces: 0, mm: "", price: 0, unit: 0 });
  };

  handleEnter = (event) => {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    if (event.key.toLowerCase() === "enter" && event.target.name!=="unit") {
      form.elements[index + 1].focus();
      event.preventDefault();
    }
    if (event.key.toLowerCase() === "enter" && event.target.name==="unit") {
      form.elements[index - 1].focus();
      
    }
  };

  render() {
    return (
      <div>
        <Form className="my-1" onSubmit={this.handleSubmit}>
          <Col md={12} className="h5 mx-auto ">
            <p className="text-center">
              Cash memo: Others
              <Button type="submit" className="btn-sm mx-1">
                Add more
              </Button>
            </p>
          </Col>

          <Row>
            {" "}
            <Col md={3} xs={4}>
              <FormGroup>
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
            <Col md={3} xs={4}>
              <FormGroup>
                <Label for="exampleunit">Unit Prices</Label>
                <Input
                  id="exampleunit"
                  name="unit"
                  autoComplete="off"
                  type="tel"
                  onChange={this.handleChange}
                  onKeyDown={this.handleEnter}
                />
              </FormGroup>
            </Col>
            <Col md={2} xs={4}>
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
            <Col md={4}>
              <FormGroup>
                <Label for="exampleprice">Price</Label>
                <Input
                  id="exampleprice"
                  name="price"
                  value={this.state.price}
                />
              </FormGroup>
            </Col>
            {/* <Col className="d-flex justify-content-end">
            
                <Button type='submit'>Add more</Button>
                
              </Col> */}
          </Row>
        </Form>
      </div>
    );
  }
}

export default Ridgingsheet;
