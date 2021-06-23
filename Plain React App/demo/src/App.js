import logo from './logo.svg';
import './App.css';
import Characters from './Components/Characters'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

function App() {
  return (
    <div className="App">
      <Characters/>
    </div>
  );
}

export default App;
