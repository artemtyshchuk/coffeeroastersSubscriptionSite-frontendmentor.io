import { Container } from "components/Container";
import { Header } from "components/Header";
import { HomePage } from "pages/HomePage";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
