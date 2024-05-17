import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/home';
import Music from './pages/music';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="music" element={<Music />} />
        </Route>
    )
);

export default router;