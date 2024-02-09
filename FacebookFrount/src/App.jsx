import { Layout } from "./component/Layout/Layout"

import Router from "./router/Router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
<Layout/>    
<Router/>
<ToastContainer />

    </>
  )
}

export default App
