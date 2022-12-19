import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Cart } from "../../components/Cart"
import { Header } from "../../components/Header"
import { ProductsList } from "../../components/ProductsList"
import { UserContext } from "../../contexts/UserContext"
import { StyleDivApp } from "../../styles/styleDivApp"

export const Home = () =>{
    const { userLogin, loading } = useContext(UserContext)

    if(loading){
        return <h1>Carregando...</h1>
    }
    
    return userLogin?(
    <>
      <Header/>
      <StyleDivApp className="container">
        <ProductsList/>
        <Cart/>
      </StyleDivApp>
    </>
    ) : (
        <Navigate to={"/login"}/>
    )
}