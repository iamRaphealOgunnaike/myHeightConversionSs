import logo from './logo.svg';
import './App.css';
import {Container,Row,Cul} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Converter from './components/converter';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <col xs={6}/>          
            <Header/>
            <Converter/>  
                 
        </Row>
      </Container>
    </div>
  );
}

export default App;
