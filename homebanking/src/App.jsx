import { Landing } from "./pages/Landing"
import { GetCards } from "./pages/GetCards"
import { PostCards } from "./pages/PostCards"
import { PostTransaction } from "./pages/PostTransaction"
import { GetLoans } from "./pages/GetLoans"
import { PostLoan } from "./pages/PostLoan"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/accounts" element={<Landing/>}/>
            <Route path="/cards" element={<GetCards/>}/>
            <Route path="/cards/applycard" element={<PostCards/>}/>
            <Route path="/transaction" element={<PostTransaction/>}/>
            <Route path="/loans" element ={<GetLoans/>}/>
            <Route path="/loans/applyloan" element={<PostLoan/>}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App
