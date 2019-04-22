import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Intro from './components/Intro'
// import Profiles from './components/Profiles' // Sample component with GraphQL query

/*	This is a sample set up for interfacing with a GraphQL server.
		In order to run, see further instructions below.

		Feel free to remove this file if you do not intend to use GraphQL. */

const client = new ApolloClient({
	uri: '/gql'
})

const app = (
	<ApolloProvider client={client}>
		<Intro />
	</ApolloProvider>
)

ReactDOM.hydrate(app, document.getElementById('root'))

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

	This file contains sample code for using GraphQL in your
	React project. Feel free to remove if you do not intend to use GraphQL.

	- - - To run this example - - -
	1. Extend the project with the GraphQL template (if necessary):
			$ turbo extend graphql

	2. Update the webpack.config.js entry JSON object with the following:
			entry: {
			  app: './src/GQLIndex.js'
			}

	3. Rebuild the project:
			$ npm run build

	4. Connect the gql.js route in the app.js file:
			const gql = require('./routes/gql')
			app.use('/gql', gql)

	5. Configure database connection (** SEE LINE 51 **):
			const config = {
				views: 'views', 		// Set views directory
				static: 'public', 		// Set static assets directory
				db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
			    url: 'mongodb://localhost/APP_DB_NAME',
					type: 'mongo',
					onError: (err) => {
						console.log('DB Connection Failed!')
					},
					onSuccess: () => {
						console.log('DB Successfully Connected!')
					}
				}
			}

	6. Run the database server (Mongo DB example):
			$ mongod

	7. Run devserver:
			$ turbo devserver

	8. Navigate to http://localhost:3000

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
