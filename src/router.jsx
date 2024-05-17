import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/home';
import Music from './pages/music';
import Weather from './pages/weather';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="music" element={<Music />} />
            <Route path="weather" element={<Weather />} />
        </Route>
    )
);

export default router;