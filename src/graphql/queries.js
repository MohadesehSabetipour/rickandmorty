import { gql } from "@apollo/client";

const GET_Episodes_INFO = gql`
  query {
    episodes {
      results {
        id
        name
        episode
        created
        air_date
      }
    }
  }
`;

const GET_Characters_INFO = gql`
  query {
    characters {
      results {
        name
        id
        image
        episode {
          id
          name
          air_date
          created
          characters {
            id
            image
            name
            gender
            status
          }
        }
      }
    }
  }
`;

const GET_Character_INFO = gql`
query Query($characterId: ID!) {
  character(id: $characterId) {
    id
    image
    name
    type
    status
    species
    gender
    episode {
      id
      name
      episode
      created
      air_date
    }
  }
}

`;

const GET_Episode_INFO = gql`
query Query($episodeId: ID!) {
  episode(id: $episodeId) {
    air_date
    created
    episode
    id
    name
    characters {
      id
      image
      name
    }
  }
}
`;



export {
  GET_Episodes_INFO,
  GET_Characters_INFO,
  GET_Character_INFO,
  GET_Episode_INFO,
};
