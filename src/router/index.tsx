import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '@views/Home'
import About from '@views/About'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <Home /> }></Route>
                <Route path="/about" element={ <About /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
