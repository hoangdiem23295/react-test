import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import CounterComp from './components/counter/CounterComp'
import DataList from './components/dataList/DataList'
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/data-list">Data List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/counter">
            <CounterComp></CounterComp>
          </Route>
          <Route path="/data-list">
            <DataList></DataList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
