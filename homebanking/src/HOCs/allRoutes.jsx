import { useSelector } from "react-redux"
import { Route } from "react-router-dom"

export default function allRoutes(route) {
    
    const isAuthenticated = useSelector(store => store.authReducer.isAuthenticated)
    return !isAuthenticated && <Route path={route.path} key={route.key} element={route.element}/>
    
}