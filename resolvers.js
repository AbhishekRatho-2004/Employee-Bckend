const typeDefs = require("./typeDefs");
const { users, profiles, posts, groups } = require("./db");

const resolvers = {
    User:{
        profile:(user)=>{
            return profiles.find((profile)=>profile.id===user.id)
        },
        posts:(user)=>{
            return posts.filter(post=>post.id===user.id)
        },
        group:(user)=>{
            return groups.filter(group=>group.memberIds.includes(user.id))
        }
    },
    Profile:{
        user:(profile)=>{
            return users.find(user=>user.profileId===profile.userId)
        }
    },
    Post:{
        user:(post)=>{
            return users.find(user=>user.id===post.userId)
        }
    },
    Group:{
        members:(group)=>{
            return users.filter(user=>group.memberIds.includes(user.id))
        }
    },
    Query: {
        getUsers: () => {
            return users;
        },
        getUserById: (parent, args) => {
            return users.find(user => user.id === args.id); 
        },
        getProfiles:()=>{
            return profiles
        },
        getProfileById:(parent,args)=>{
            return profiles.find(profile=>profile.id===args.id)
        },
        getPosts:()=>{
            return posts
        },
        getPostById:(parent,args)=>{
            return posts.find(post=>post.id===args.id)
        },
        getGroups:()=>{
            return groups
        },
        getGroupById:(parent,args)=>{
            return groups.find(group=>group.id===args.id)
        }
    },
    Mutation: {
        createUser:(parent,args)=>{
            const newUser = {
                id:(users.length+1).toString(),
                name:args.name,
                email:args.email,
                profile:null,
                groupIds:[]
            }
            users.push(newUser)
            return newUser
        },
        updateUser:(parent,args)=>{
            const user= users.find(user=>user.id===args.id)
            if(!user) throw new Error("User not Found")
            if(args.name) user.name=args.name
            if(args.email) user.email=args.email
            return user
        },
        deleteUser:(parent,args)=>{
            const index = users.findIndex(user=>user.id===args.id)
            if(index<0) throw new Error("User not Found")
            users.splice(index,1)
            return "User Deleted successfully"
        },
        createProfile:(parent,args)=>{
            const user=users.find(user=>user.id==args.id)
            if(!user) throw new Error("User not Found")
            const newProfile={
                id:(profiles.length+1).toString(),
                bio:args.bio,
                userId:args.id
            }
            profiles.push(newProfile)
            user.profileId=newProfile.id
            return newProfile
        },
        updateProfile:(parent,args)=>{
            const profile = profiles.find(profile=>profile.id==args.id)
            if(!profile) throw new Error("Profile not Found")
            if(profile.bio) profile.bio=args.bio
            return profile
        },
        deleteProfile:(parent,args)=>{
            const index = profiles.findIndex(profile=>profile.id==args.id)
            if(index<0) throw new Error("Profile not Found")
            let searchUser=profiles[index].userId
            const user = users.find(user=>user.userId==user.profileId)
            user.profileId=null
            profiles.splice(index,1)
            return "Profile Deleted Successfully"
        },
        createPost: (parent, { userId, title, content }) => {
            const user = users.find(user => user.id === userId);
            if (!user) throw new Error("User not found");
            const newPost = { id: (posts.length + 1).toString(), title, content, userId };
            posts.push(newPost);
            return newPost;
        },

        updatePost: (parent, { id, title, content }) => {
            const post = posts.find(post => post.id === id);
            if (!post) throw new Error("Post not found");
            if (title) post.title = title;
            if (content) post.content = content;
            return post;
        },

        deletePost: (parent, { id }) => {
            const index = posts.findIndex(post => post.id === id);
            if (index === -1) throw new Error("Post not found");
            posts.splice(index, 1);
            return "Post deleted successfully";
        },
        createGroup: (parent, { name }) => {
            const newGroup = { id: (groups.length + 1).toString(), name, memberIds: [] };
            groups.push(newGroup);
            return newGroup;
        },

        addUserToGroup: (parent, { userId, groupId }) => {
            const user = users.find(user => user.id === userId);
            const group = groups.find(group => group.id === groupId);
            if (!user || !group) throw new Error("User or Group not found");
            if (!group.memberIds.includes(userId)) group.memberIds.push(userId);
            if (!user.groupIds.includes(groupId)) user.groupIds.push(groupId);
            return group;
        },

        removeUserFromGroup: (parent, { userId, groupId }) => {
            const group = groups.find(group => group.id === groupId);
            if (!group) throw new Error("Group not found");
            group.memberIds = group.memberIds.filter(id => id !== userId);
            return group;
        }
    }
};

module.exports = resolvers;
