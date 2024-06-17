import { Index } from "./pages/Index"
import { LandingAuthenticated } from "./pages/LandingAuthenticated"
import { GetCards } from "./pages/GetCards"
import { PostCards } from "./pages/PostCards"
import { PostTransaction } from "./pages/PostTransaction"
import { GetLoans } from "./pages/GetLoans"
import { PostLoan } from "./pages/PostLoan"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { GetAccount } from "./pages/GetAccount"
import {IndexAuthenticated} from "./pages/IndexAuthenticated"
import authRoutes from "./HOCs/authRoutes"
import allRoutes from "./HOCs/allRoutes"
import { Logout } from "./pages/Logout"

const authenticatedRoutes = [
  {
    path:'/',
    element:<IndexAuthenticated/>,
    key:"indexAuthenticated"
  },
  {
  path:"accounts",
  element:<LandingAuthenticated/>,
  key: "accounts"
  },
  {
    path:"cards",
    element:<GetCards/>,
    key: "cards"
  },
  {
    path:"cards/applycard",
    element:<PostCards/>,
    key: "applycard"
  },
  {
    path:"transactions",
    element:<PostTransaction/>,
    key:"transactions"
  },
  {
    path:"loans",
    element:<GetLoans/>,
    key: "loans"
  },
  {
    path:"loans/applyloan",
    element:<PostLoan/>,
    key:"applyloan"
  },
  {
    path:"/getAccount/:accountId",
    element:<GetAccount/>,
    key: "getAccount"
  }
]

const permitAllRoutes = [
  {
    path:"/",
    element:<Index/>,
    key:"index"
  }
]

function App() {
  
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          {authenticatedRoutes.map(route => (
            authRoutes(route)
          ))}
          {permitAllRoutes.map(route => (
            allRoutes(route)
          ))}
          <Route path="/Logout" element={<Logout/>}/>
          {/* <Route path="*" element={<Navigate to="/"/>}></Route> */}
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
