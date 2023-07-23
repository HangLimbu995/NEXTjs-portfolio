import './App.css';
import './import.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AppRouting from './components/AppRouting';

function App() {
  return (
    <div className="App" >
    <AppRouting />
      <ToastContainer />
    </div>
  );
}

export default App;
