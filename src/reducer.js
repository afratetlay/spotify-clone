export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finished developing
  token:
    "BQBr0Il5SPZJijw9EyYKa3H0tVwKS5StsHfLKLnpExoz4obPI4uxU9zbn6DbxfMO6OraA2kdN9wEMDsRpSCJwAx4P8lnld-GJ7yMlcho7kUJFiUNnu_arygNbljejlivqLuHA-MkZrZFLuMhWsYROCfm9NdCLE7oyccQi_cu889-GLAmp1oNE4Wsg1ow2WnIHk5vmIGG19sHJ5w74OSk",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
