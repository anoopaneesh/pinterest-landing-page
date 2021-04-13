
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header'
import { PinProvider } from "./api/context";
function App() {
  return (
    <div className="App">
      <PinProvider>
      <Header />
      <Dashboard />
      </PinProvider>
    </div>
  );
}

export default App;
