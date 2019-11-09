import React, { useEffect, useState } from 'react';

import { TableRestaurants } from './TableRestaurants'
import * as Database from '../model/Database'
import '../styles/App.css';

export const App = () =>
{
	let [ restaurants, setRestaurants ] = useState();

	useEffect( () =>
	{
		if( !restaurants ) updateRestoGraph();
	})

	const updateRestoGraph = () =>
	{
		Database.getRestos().then( restos => setRestaurants( restos ) );
	}

	////////////////////////////////////////////////////////////////////////////////

	return	(
				<div className="App">
					<header className="App-header">

					<TableRestaurants
						restos={ restaurants || [] }
						onClick={ id => console.log( id ) }
						onDelete={id => Database.deleteRestos( id ) }
					/>

					</header>
				</div>
			);
}