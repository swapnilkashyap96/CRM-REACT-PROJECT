// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Pages/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
