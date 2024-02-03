import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splach from './page/splach/splach'
import Home from './page/home/home';

function Routeur(): JSX.Element {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Splach />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;

