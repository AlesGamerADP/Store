import { BrowserRouter,Routes, Route } from "react-router"
import Header from './components/Header'
import HeroBanner from "./components/HeroBanner"
import ProductoPage from "./components/ProductoPage"


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {
            <>
              <Header />
              <HeroBanner />
            </>
      }></Route>
        <Route path="/producto" element= {<ProductoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
