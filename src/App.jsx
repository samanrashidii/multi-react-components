import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Music from './pages/music';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
