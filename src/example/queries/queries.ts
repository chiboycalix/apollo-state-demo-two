import { gql } from "@apollo/client";

export const GET_RATES = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;

export const GET_RATES_PLUS_CLIENT = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
      local @client
    }
  }
`;