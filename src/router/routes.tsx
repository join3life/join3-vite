import { Navigate, RouteObject } from 'react-router-dom'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Profile from '@/pages/Profile'
import NotFound from '@/pages/NotFound'

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
] as RouteObject[]

export default routes
