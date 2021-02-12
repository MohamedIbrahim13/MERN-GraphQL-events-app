const Event = require("../models/event");
//const User = require("../models/user");

const {
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLNonNull,
  
} = require("graphql");

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    title: { type: GraphQLString },
    user: { type: GraphQLString },
    price: { type: GraphQLFloat },
    date: { type: GraphQLString },
    description: { type: GraphQLString },
    id: { type: GraphQLID },
    // user: {
    //   type: UserType,
    //   resolve(parent, args) {
    //     return User.findOne({ email: parent.user });
    //   },
    // },
  }),
});

// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: () => ({
//     email: { type: GraphQLString },
//     id: { type: GraphQLID },
//     events: {
//       type: new GraphQLList(EventType),
//       resolve(parent, args) {
//         return Event.find({ user: parent.email });
//       },
//     },
//   }),
// });



const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    event: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Event.findById(args.id);
      },
    },

    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Event.find({});
      },
    },
    // user: {
    //   type: UserType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return User.findById(args.id);
    //   },
    // },
    // users: {
    //   type: new GraphQLList(UserType),
    //   resolve(parent, args) {
    //     return User.find({});
    //   },
    // },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addEvent: {
      type: EventType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let event = new Event({
          title: args.title,
          user: args.user,
          price: args.price,
          date: args.date,
          description: args.description,
        });
        return event.save();
      }
    },
    cancelEvent: {
      type: EventType,
      args: { id: { type: new GraphQLNonNull(GraphQLID)}},
      resolve(parent, args) {
        return Event.findOneAndDelete(args.id);
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation,
})
 //   return event.save().then((event) => {
      //     User.findOne({ email: event.user }).then((res) => {
      //       if (!res) {
      //         let user = new User({
      //           email: event.user,
      //         });
      //         return user.save();
      //       } else {
      //         return null;
      //       }
      //     });
		  //     console.log(event);
      //     return event;
      //   });