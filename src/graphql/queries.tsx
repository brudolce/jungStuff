import gql from "graphql-tag";

export const LIST_PLANS = gql`
  query {
    listPlans {
      id
      price 
    }
  }
`;

export const SUBSCRIBE_TO_PLAN = gql`
  mutation SubscribeToPlan($id: Int!) {
    subscribeToPlan(id: $id) {
      id
    }
  }
`;
