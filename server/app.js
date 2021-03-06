const express = require('express');
const app = express();
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/Schema');

app.use(cors());

mongoose.connect('mongodb+srv://test:test@cluster0.9fdg8.mongodb.net/graphqldb?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true}).then((result)=>{
    app.listen(4000,()=>{
        console.log('Server is running with the database...')
    });
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
    
}));