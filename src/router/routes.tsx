import { Navigate, RouteObject } from 'react-router-dom'

import Home from '@/pages/Home'
import UserProfile from '@/pages/UserProfile'
import OrganizationProfile from '@/pages/OrganizationProfile'
import NotFound from '@/pages/NotFound'

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'user/:id',
    element: <UserProfile />
  },
  {
    path: 'profile/:id',
    element: <OrganizationProfile />
  },
  {
    path: '*',
    element: <NotFound />
  }
] as RouteObject[]

export default routes
