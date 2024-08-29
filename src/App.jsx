import Informacion from "./components/Informacion";
import Contador from "./components/Contador";
function App() {
  return (
    <main>
      <h1>primer proyecto reack</h1>
      <p>mundo</p>
      {/* invocar componente*/}
      <Informacion />
      <Contador></Contador>
    </main>
  );
}

export default App;
