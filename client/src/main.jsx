import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from '../src/pages/Signup.jsx';
import App from './App.jsx'
import Home from './pages/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
       index: true,
        element: <Home />,
      },
    ], 
  },
  {
    path: '/signup',
    element: <Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)