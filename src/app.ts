const express = require('express');
const dotenv = require('dotenv');
import {graphqlHTTP} from 'express-graphql';
import {schema, root} from './api/schema';
import {createConnection} from 'typeorm';
const typeOrmConfig = require('../ormconfig');

dotenv.config();
const app = express();
app.use(express.json());

app.use(process.env.GRAPHQL_PATH!, graphqlHTTP((request, response, graphQLParams)=> ({
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: {
        req: request,
        res: response,
    }
})));

app.listen(process.env.SERVER_PORT!, ()=>{

    createConnection(typeOrmConfig.config).then(async connection=>{}).catch(err =>{}); //create connection to mysql by typeorm

    console.log(`========== STARTED ON PORT ${process.env.SERVER_PORT} ==========`);
});