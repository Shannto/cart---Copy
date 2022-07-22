import React from "react";

import { Input, Button, Table, Container,Row,Col } from "reactstrap";

const RowItem = ({ todo, deleteItem }) => (
  <tr>
    <td>{todo.pieces}</td>
    <td>{todo.feet}</td>
    <td>{todo.mm}</td>
    <td>{todo.bundle}</td>
    <td>{todo.price}</td>
    <td>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={(e) => deleteItem(todo)}
      >
        Delete
      </button>
    </td>
  </tr>
);

const TableView = ({
  todos,
  total,
  viewTotal,
  deleteItem,
  reverse,
  reverseList,
  handleLabour,
}) => (
  <div>
	
	
    <Col ><p className="h3 text-center">Total = {total}</p></Col>
	<Col className="d-flex justify-content-center"><input
      className="text-center "
      type="tel"
      autoComplete="off"
      onKeyPress={handleLabour}
      placeholder="Labour"
    /></Col>
	
    <Container>
    <div className="col">
      <div className="row">
        <Table>
          <thead>
            <tr>
              <th>Pieces</th>
              <th>Feet</th>
              <th>MM</th>
              <th>Bundle</th>
              <th>Price</th>
              <th>
                <button
                  onClick={reverseList}
                  className="btn btn-outline-info  p-1"
                >
                  sort⇅
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {reverse
              ? todos
                  .map((todo) => (
                    <RowItem
                      key={todo.id}
                      todo={todo}
                      deleteItem={deleteItem}
                    />
                  ))
                  .reverse()
              : todos.map((todo) => (
                  <RowItem key={todo.id} todo={todo} deleteItem={deleteItem} />
                ))}
          </tbody>
        </Table>
      </div>
    </div>
  </Container></div>
);

export default TableView;

{
  /* {todos.map(todo => (
			this.setState({
				total:total+todo.price
			})
			))} */
}
{
  /* 		
		total={todos.map(todo => (
			total=total+todo.price
			))} */
}
