import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import CounterComp from './components/counter/CounterComp'
import DataList from './components/dataList/DataList'
import SideBar from './components/sidebar/index'
import {StyledMainContent} from './styled'
function App() {
  return (
    <div className="App">
      <Router>
        <SideBar></SideBar>
        <StyledMainContent>
          <Switch>
            <Route exact path="/">
              <CounterComp></CounterComp>
            </Route>
            <Route path="/data-list">
              <DataList></DataList>
            </Route>
          </Switch>
        </StyledMainContent>
      </Router>
    </div>
  );
}

export default App;
