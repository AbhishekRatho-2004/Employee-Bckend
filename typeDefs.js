const typeDefs = `
    type User{
        id:ID!
        name:String!
        email:String!
        profile:Profile
        posts:[Post]
        group:[Group]
    }
    type Profile{
        id:ID!
        bio:String!
        user:User
    }
    type Post{
        id:ID!
        title:String!
        content:String!
        user:User
    }
    type Group{
        id:ID!
        name:String!
        members:[User]
    }
    type Query{
        getUsers:[User]
        getUserById(id:ID!):User
        getProfiles:[Profile]
        getProfileById(id:ID!):Profile
        getPosts:[Post]
        getPostById(id:ID!):Post
        getGroups:[Group]
        getGroupById(id:ID!):Group
    }
    type Mutation{
        createUser(name:String!,email:String!):User
        updateUser(id:ID! name:String,email:String):User
        deleteUser(id:ID!):String

        createProfile(userId:ID!,bio:String!):Profile
        updateProfile(id:ID!,bio:String!):Profile
        deleteProfile(id:ID!):String

        createPost(userId:ID!,title:String!,content:String!):Post
        updatePost(id:ID!,title:String,content:String):Post
        deletePost(id:ID!):String

        createGroup(name: String!): Group
        addUserToGroup(userId: ID!, groupId: ID!): Group
        removeUserFromGroup(userId: ID!, groupId: ID!): Group
    }
`

module.exports = typeDefs