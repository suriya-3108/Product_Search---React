import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import ProductCards from './components/productCard'
// import './App.css'
import {useProduct} from './context/context.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import Grid from "@mui/material/Grid";

function App() {


  const { Cart,setCart,Text } = useProduct();
  const getProducts = async () => {
        try {
            console.log("hi")
            let listOfProducts = await axios.get('https://dummyjson.com/products')
            setCart(listOfProducts.data.products)
            console.log(listOfProducts)

        } catch (err) {
            return err
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

const filteredCart = Text
  ? Cart.filter(item =>
      item.title.toLowerCase().includes(Text.toLowerCase())
    )
  : Cart;




  return (
    <>
    <Navbar />
  <Grid container spacing={8}>
    {
      
      filteredCart.map((cart)=> (
           <Grid item xs={12} sm={6} md={3} key={cart.id}><ProductCards title={cart.title} img={cart.images[0]}  desc={cart.description} price={cart.price} rating={cart.rating}/></Grid>
          ))
         
    }
</Grid>
    </>
  )
}

export default App
