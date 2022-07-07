import React from 'react';

import { Input, Button, Table, Container } from 'reactstrap';

const RowItem = ({ todo }) => (
	<tr>
		<td>{todo.pieces}</td>
		<td>{todo.feet}</td>
		<td>{todo.mm}</td>
		<td>{todo.bundle}</td>
		<td>{todo.price}</td>
		
	</tr>
);



const TableView = ({ todos,total,viewTotal }) => (
	<Container>
	<Table>
		<thead>
			<tr>
				<th>Pieces</th>
				<th>Feet</th>
				<th>MM</th>
				<th>Bundle</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			{todos.map(todo => (
				<RowItem
					key={todo.id}
					todo={todo}
				/>

			))}
			
		</tbody>
		
	</Table>
	
	<p className='h3 text-center' >Total = {total}</p>
	</Container>
	
);



export default TableView;

{/* {todos.map(todo => (
			this.setState({
				total:total+todo.price
			})
			))} */}
{/* 		
		total={todos.map(todo => (
			total=total+todo.price
			))} */}
		