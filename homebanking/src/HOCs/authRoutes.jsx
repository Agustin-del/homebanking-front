import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import MainLayoutAuthenticated from "../layouts/MainLayoutAuthenticated";

export default function authRoutes(route) {
  const isAuthenticated = useSelector(store => store.authReducer.isAuthenticated)
  return  isAuthenticated && <Route path={route.path} key={route.key} element={<MainLayoutAuthenticated>{route.element}</MainLayoutAuthenticated>}/>
  }