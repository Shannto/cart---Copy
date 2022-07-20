import React from 'react'
import {Input,Button,Col,Row} from 'reactstrap';

class BuyingPrice extends React.Component{
  state={
    ft:0,
    mm:0,
    bun:0,
    ton:0,
    buy:0,
    qty:0
  }

  handleChangeBuy=(event)=>{
    this.setState(
      {
        [event.target.name]:event.target.value
      }
    )
  }

  render(){
return(
  <div>
<Form className="my-2" >
            <Row> 

            <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="bfeet">Feet</Label>
                  <Input
                    id="bfeet"
                    name="feet"
                    onChange={this.handleChangeBuy}
                  />
                </FormGroup>
              </Col>

              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="bmm">M.M.</Label>
                  <Input
                    id="bmm"
                    name="mm"
                    onChange={this.handleChangeBuy}
                  />
                </FormGroup>
              </Col>

              <Col md={2} xs={6}><FormGroup>
                  <Label for="bqty">Pieces</Label>
                  <Input
                    id="bqty"
                    name="qty"
                    onChange={this.handleChangeBuy}
                  />
                </FormGroup>
              </Col>


              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="bton">Ton</Label>
                  <Input
                    id="bton"
                    name="ton"
                    onChange={this.handleChangeBuy}
                  />
                </FormGroup>
              </Col>

              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="bbun">Bundle</Label>
                  <Input id="bbun" name="bun" value={this.state.price} />
                </FormGroup>
              </Col>
              <Col md={2} xs={6}>
                <FormGroup>
                  <Label for="bdivisor">Divisor</Label>
                  <Input id="bdivisor" name="divisor" value={this.state.divisor} />
                </FormGroup>
                
              </Col>
              <Col className="d-flex justify-content-end" >
                
                <Button type='submit' className="align-middle" >Add more</Button>
              </Col>
                </Row></Form>
  </div>
);
  }
}

export default BuyingPrice