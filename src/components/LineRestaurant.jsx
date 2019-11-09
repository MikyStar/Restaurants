import React from 'react';

export const LineRestaurant =( { resto, onClick, onDelete } ) =>
(
	<tr>
		<td onClick={ () => onClick( resto._id ) }>{ resto.name }</td>

		<td>
			<button class="btn btn-dark" onClick={ () => onDelete( resto._id ) }>Delete</button>
		</td>
	</tr>
)