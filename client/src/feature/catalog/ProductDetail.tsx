import { Divider, Grid, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/Models/product";

export default function ProductDetail(){
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(`http://localhost:5201/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, [id])

    if(loading) return <h3> loading.....</h3>
    if(!product) return <h3>Product Not found</h3>

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
              <img src={product.pictureUrl} alt={product.name} style={{width: '100%'} }/>
               
            </Grid>        
            <Grid item xs={6}>
            <Typography variant="h3">  {product.name}     </Typography>
            <Divider sx={{mb: 2}} />
            <Typography variant="h4" color='secondary'>  ${product.price}     </Typography>
            <TableContainer>
                    <table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </table>
                </TableContainer>
                </Grid>
                
    </Grid>
        
    )
}