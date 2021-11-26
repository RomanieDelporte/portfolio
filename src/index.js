/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import {
	ApolloProvider,
	InMemoryCache,
	HttpLink,
	ApolloClient,
} from "@apollo/client";

const httpLink = new HttpLink({
	uri:
		process.env.NODE_ENV === "development"
			? "http://localhost:4000"
			: "https://romaniedelporte.herokuapp.com/",
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
