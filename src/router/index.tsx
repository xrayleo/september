import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@views/Home'
import About from '@views/About'
import Help from '@views/Help'
import Winners from '@views/Winners'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <Home /> }></Route>
                <Route path="/about" element={ <About /> }></Route>
                <Route path="/help" element={ <Help /> }></Route>
                <Route path="/winners" element={ <Winners /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
