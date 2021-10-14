const express = require('express')
const axios = require('axios')
const redis = require('redis')
const {promisify} = require('util');
const { accessSync } = require('fs');

const client = redis.createClient({
});

const GET_ASYNC = promisify(client.get).bind(client)
const SET_ASYNC = promisify(client.set).bind(client)


const app = express()

app.get('/mascota', async (req, res) => {

    const reply = await GET_ASYNC('characters')
    if (reply)
        return res.json(JSON.parse(reply));

    const response = await axios.get('https://e18f-2800-484-7996-2680-112c-55f4-45f5-54e.ngrok.io/mascota');
   
         await SET_ASYNC('characters', JSON.stringify(response.data));
             res.json(response.data);
             
}); 
app.get('/mascota/_id/:id_pet', async (req, res) => {

    const response = await axios.get('https://e18f-2800-484-7996-2680-112c-55f4-45f5-54e.ngrok.io/mascota/_id/' + req.params.id_pet);

    return res.json(response.data);
});

app.listen(3001);
console.log('Server on port 3001');