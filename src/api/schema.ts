// import {Request, Response} from 'express';
import {buildSchema} from 'graphql';

export const schema = buildSchema(`
    type Query{
        user(uid: String!): User
        room(rid: String!): Room
        #bookNote(bid: String!): BookNote
    }
    
    type Mutation {
        register(name: String!, surname: String!, email: String!): RegisteredUser
        book(uid: String!, rid: String!, time: String!): BookedNote
    }
    
    type BookedNote{
        bid: ID,
        time: String,
        uid: ID,
        rid: ID
    }
    
    type RegisteredUser{
        uid: ID,
        email: String
    }
    
    type User{
        uid: ID,
        name: String,
        surname: String,
        email: String
    }
    
    type timeSet{
        timeStart: String,
        timeEnd: String
    }
    
    type Room{
        rid: ID,
        roomName: String,
        timeSets: [timeSet]
    }
`);

export const root = {
    register:
        async({name, surname, email}: {name: string, surname: string, email: string}, context: any)=>{
        return {uid: '1', email: email};
    },

    book:
    async ({uid, rid, time}: {uid: string, rid: string, time: string}, context: any) =>{
      return   {bid: "1", time: time, uid: uid, rid: rid}
    },
}