import Rotas from './router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <div >
      <Rotas />
      <ToastContainer
        autoClose={3000}
        theme="colored"
      />
    </div>

  );
}