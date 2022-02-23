import './App.css';
import { Container } from './components/Container';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  return (
    <div className="App">
     <Container styles={{
       border: "1px solid black",
       padding: "1rem",
     }}></Container>
    </div>
  );
}

export default App;
