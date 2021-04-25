import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import ProgressDeck from "./components/ProgressDeck";
import { Container, Row, Column } from './components/Layout/Layout';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Row>
            <Column col={2}>
              <Sidebar />
            </Column>
            <Column col={10} >
              <Switch>
                <Route path="/progress-deck" component={ProgressDeck} />
                <Route path="/dropdown" component={Dropdown} />
              </Switch>
            </Column>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
