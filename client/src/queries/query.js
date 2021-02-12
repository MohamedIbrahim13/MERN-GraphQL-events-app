import { gql } from "@apollo/client";


const EVENTS_QUERY = gql`
  query getEventsQuery {
    events {
      title
      price
      date
      description
      id
    }
  }
`;

// const USERS_QUERY = gql`
//   query getUsersQuery {
//     users {
//       id
//       email
//     }
//   }
// `;

const ADD_EVENT = gql`
  mutation AddEvent($title: String!,$user: String!,$price: Float!,$date: String!,$description:String!) {
    addEvent(title: $title, user: $user, price: $price, date: $date,description:$description) {
	  title	
      id
    }
  }
`;

const CANCEL_EVENT = gql`
  mutation CancelEvent($id: ID!) {
    cancelEvent(id: $id) {
      id
    }
  }
`;



const SINGLE_EVENT = gql`
  query Event($id: ID!) {
    event(id: $id) {
      title
      price
      date
      description
      id
    }
  }
`;

export { ADD_EVENT, CANCEL_EVENT, EVENTS_QUERY, SINGLE_EVENT };
