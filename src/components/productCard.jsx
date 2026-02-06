import { useReducer, useState, useEffect} from "react"
import reducerfun from '../reducers/reducer'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  {useProduct} from '../context/context.jsx'
import '../index.css'

const ProductCards = ({title,img,desc,price,rating}) => {
 const { Cart, setCart } = useProduct();
    const initialstate = {
        product: []
    }
    const [product, dispatch] = useReducer(reducerfun, initialstate);



  // const getProducts = async () => {
  //       try {
  //           console.log("hi")
  //           let listOfProducts = await axios.get('https://dummyjson.com/products')
  //           setCart(listOfProducts.data.products)
  //           console.log(listOfProducts)

  //       } catch (err) {
  //           return err
  //       }
  //   }

  //   useEffect(() => {
  //       getProducts();
  //   }, [])


  return (
    <Card className='mt-2'sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {price}
        </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {rating}
        </Typography>

      </CardActions>
    </Card>
  );


}

export default ProductCards;