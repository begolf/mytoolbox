import './App.css';
import Urls from './components/Urls.js';
import Launchers from './components/Launchers';
import Widgets from './components/Widgets';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col><Urls/></Col>
        <Col><Launchers/></Col>
        <Col><Widgets/></Col>
      </Row>
    </Container>
  );
}


// function App-orig() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Header
//       </header>
//       <Urls />
//     </div>
//   );
// }

export default App;
