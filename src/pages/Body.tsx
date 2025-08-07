import Login from './auth/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './home/Browse'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body