import Login from './pages/Login';
import './App.css';
//importo il necessario per impostare le rotte
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import Home from "./pages/Home";
import {Provider} from "react-redux";
import {store} from './store/store'

//tutte quelle rotte che metteremo qui dentro avranno il controllo di protectedRoutes e verranno reindirizzate al login
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Login/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path={"/home"} element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
