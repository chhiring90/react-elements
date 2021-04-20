import ProgressDeck from "./components/ProgressDeck";
import { Container, Row, Column } from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column col={12} >
            <ProgressDeck />
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
