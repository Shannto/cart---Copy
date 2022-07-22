import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        className="btn btn-sm "
        onClick={(e) => deleteItem(todo)}
      >
        ❌
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
	<Col className="d-flex justify-content-center mb-1"><input
      className="text-center "
      type="tel"
      autoComplete="off"
      onKeyPress={handleLabour}
      placeholder="Labour"
    /></Col>
	
    
    
        
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
                  className="btn btn-outline-info py-0 px-0 mb-0 h2"
                >
                  sort&nbsp;⇅
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
