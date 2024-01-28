import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Service'
import Counter from './Counter'
import Effect from './Effect'
import Reducer from './Reducer'
import Footer from './Footer'
import Callback from './Callback'
import Ref from './Ref'
import Sec from './Sec'
import Memo from './Memo'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />

        </Route>
      </Routes>
      <div><Counter /></div>
      <Effect/>
      <Reducer/> 
      <Footer/>
      <Callback/>
      <Ref/>
      <Sec/>
      <Memo/>
    </BrowserRouter>

  )
}


