import Layout from "./layout";
import {Route, Routes} from "react-router-dom";
import {AppContext} from "./context";
import './index.css';
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { useEffect, useState } from "react";
import { ProtectedPage } from "./components/ProtectedPage/ProtectedPage";
import Main from './pages/MainPage/Main';

export const RoutesMap = () => {

    const [isAuth, setIsAuth] = useState(() => {
        const isAuth = localStorage.getItem('isAuth')

        if (isAuth === 'true') {
            return true
        }

        return false
    })

    const onAuth = (login, password) => {
        if (login && password) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }

    const onExit = () => {
        setIsAuth(false)
    }

    useEffect(() => {
        localStorage.setItem('isAuth', isAuth)
    }, [isAuth])

    return (
        <AppContext.Provider value={{ onAuth, onExit, isAuth }}>
            <Routes>
                    <Route index element={<Main />}  />
                    <Route path={'/'} element={<Layout />}>
                    <Route path={'/home'} element={
                    <ProtectedPage>
                        <HomePage />
                    </ProtectedPage>}/>
                    <Route path={'/login'} element={<LoginPage />} />
                </Route>
            </Routes>
        </AppContext.Provider>
    )
}
