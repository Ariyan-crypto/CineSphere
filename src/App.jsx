
import './App.css'
import Trending from './Pages/Trending'
import Header from './Section/Header'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navigation from './Section/Navigation'
import Movie from './Pages/Movie'
import Tvseries from './Pages/Tvseries'
import Search from './Pages/Search'
export default function App() {
  const router=createBrowserRouter([
    {
path:"/",
element:<><Trending/><Navigation/></>
  },
  {
    path:"/movie",
    element:<><Movie/><Navigation/></>
  },
  {
    path:"/tvseries",
    element:<><Tvseries/><Navigation/></>
  },
  { 
    path:"/search",
    element:<><Search/><Navigation/></>
  },{

    path: "*",
    element: <div className="error-page">404 - Page Not Found</div>
  }])
return(
  <>
  <Header/>
  <div ><RouterProvider router={router}/></div>
  </>
)
}


