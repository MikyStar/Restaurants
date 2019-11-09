import React from 'react';

import { LineRestaurant } from './LineRestaurant';

export const TableRestaurants = ( { restos, onClick, onDelete } ) =>
{
    const makeTable = ( restos ) =>
    {
        let jsx = [];

        restos.forEach( resto =>
        {
            jsx.push(   <LineRestaurant
                            resto={ resto }
                            onClick={ id => onClick( id ) }
                            onDelete={ id => onDelete( id ) }
                        />
                    );
        });

        return jsx;
    }

    /////////////////////////////////////////////////////////////////////////////////////

    return  (
				<table>

					<thead>
						<tr>
							<th>Nom</th>
							<th>Cuisine</th>
							<th>Supprimer</th>
						</tr>
					</thead>

					<tbody>
						{ makeTable( restos ) }
					</tbody>
				</table>
            );
}