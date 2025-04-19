import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here as needed */}
    </Routes>
  )
}

export default App