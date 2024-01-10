import express from 'express';
import axios from 'axios';
import products from './data/products.js'

const app = express();
    
app.get('/api/products', async (req, res) => {
    
    const {data} = await axios.get(
        'https://raw.githubusercontent.com/Ovi/DummyJSON/master/src/data/products.json'
        );
            
    res.json(data);
    
});

// "Test code for using local file for api"
// app.get('/test', async (req, res) => {            
//     res.json(products);
// });

app.get('/api/product/:id', async (req, res) => {
    
    const {data} = await axios.get(
        `https://dummyjson.com/product/${req.params.id}`
        );
        
    res.json(data);
});

app.listen(8080, console.log('Server is running on port 8080'));