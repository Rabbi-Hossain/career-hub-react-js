import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Blog from './components/Blog/Blog.jsx';
import Details from './components/Details/Details.jsx';
import ApplyJob from './components/ApplyJob/ApplyJob.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statistic',
        element:<Statistics></Statistics>
      },
      {
        path:'/appliedjob',
        element:<AppliedJob></AppliedJob>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'/apply',
        element:<ApplyJob></ApplyJob>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:()=>fetch('/jobs.json')
      }
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
