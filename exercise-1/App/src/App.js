import React from 'react';
import logo from './logo.svg';
import ExampleComponent from './components/ExampleComponent'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
});


function App() {
  return (
    <div className="App bg-gray-300 w-full h-screen mt-0 p-12">
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="bg-white flex flex-col justify-between leading-normal m-auto p-12">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-4xl mb-12">Welcome to the hiring exercise 1</div>
            <p className="text-gray-700 text-base">Please follow the brief in README.md</p>
          </div>
        </div>
      </div>
      <ApolloProvider client={client}>
        <ExampleComponent />
      </ApolloProvider>  
  </div>
  );
}

export default App;
