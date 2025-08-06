import Login from './auth/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './home/Browse'

const Body = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Body