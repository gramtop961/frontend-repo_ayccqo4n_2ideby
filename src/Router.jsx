import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import SDK from './pages/SDK'
import Docs from './pages/Docs'

function RouterView() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/sdk" element={<SDK />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  )
}

export default RouterView
