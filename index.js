const dotenv = require("dotenv").config()
const {ApolloServer} = require("@apollo/server")
const {startStandaloneServer}=require("@apollo/server/standalone")
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

const PORT = process.env.PORT

const startServer = async ()=>{
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    const {url}= await startStandaloneServer(server,{
        listen:{
            port:PORT
        }
    })
    console.log(url)
}

startServer()