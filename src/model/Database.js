const API_BASE_URL = "http://localhost:4545/api/restaurants/";

module.exports =
{
	deleteRestos : async id =>
	{
		return Promise( ( resolve, reject ) =>
		{
			fetch( `${ API_BASE_URL }${ id }`, { method: "DELETE" } ).then( responseJSON =>
			{
				responseJSON.json().then( json =>
				{
					resolve( json );
				});
			} ).catch( err => reject( err ) );
		});
	},

	getRestos : () =>
	{
		return new Promise( ( resolve, reject ) =>
		{
			fetch( API_BASE_URL ).then(reponseJSON =>
			{
				reponseJSON.json().then(reponseJS =>
				{
					resolve( reponseJS.data );
				})
			}).catch( err => reject( err ) );
		});
	}
}