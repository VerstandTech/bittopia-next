import NewCourse from '@/pages/NewCourse'
import NewSociety from '@/pages/NewSociety'
import ProfileAbout from '@/pages/ProfileAbout'
import SocietyDetails from '@/pages/SocietyDetails'
import Profile from '@/pages/profile'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import SocietyCourses from './pages/SocietyCourses'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/society/:societyId',
    element: <SocietyDetails />
  },
  {
    path: '/course/create',
    element: <NewCourse />
  },
  {
    path: '/society/create',
    element: <NewSociety />
  },

  {
    path: '/society/:societyId/courses',
    element: <SocietyCourses />
  },
  {
    path: '/society/:societyId/proposals',
    element: <SocietyDetails />
  },
  {
    path: '/society/:societyId/members',
    element: <SocietyDetails />
  },
  {
    path: '/profile/:id',
    element: <Profile />
  },
  {
    path: '/profile/:id/about',
    element: <ProfileAbout />
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
