import express from 'express';
import axios from 'axios';

const app = express();
    
app.get('/api/products', async (req, res) => {
    
    const {data} = await axios.get(
            'https://raw.githubusercontent.com/Ovi/DummyJSON/master/src/data/products.json'
            );
            
    res.json(data);
});

app.get('/api/product/:id', async (req, res) => {
    
    const {data} = await axios.get(
        `https://dummyjson.com/products/${req.params.id}`
        );
        
        res.json(data);
});

app.listen(8080, console.log('Server is running on port 8080'));