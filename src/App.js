import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import Home from './pages/Home'
// import Soal1 from './pages/Soal1'
// import Soal2 from './pages/Soal2'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      {/* <Route path="/soal-1" element={<Soal1 />} /> */}
      {/* <Route path="/soal-2" element={<Soal2 />} /> */}
    </Route>,
  ),
)