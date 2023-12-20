import express from 'express';
import axios from 'axios';
// import products from './data/products.js';

const app = express();
    
app.get('/api/products', (request, response) => {
    
    axios
        .get('https://raw.githubusercontent.com/Ovi/DummyJSON/master/src/data/products.json')
        .then((res) => {
            response.json(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

app.get('/api/product/:id', (request, response) => {
    
    axios
        .get(`https://dummyjson.com/products/${request.params.id}`)
        .then((res) => {
            response.json(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

// app.get('/api/product/:id', (req, res) => {
//     const product = products.find(p => p.id == req.params.id);
// })

app.listen(8080, console.log('Server is running on port 8080'));