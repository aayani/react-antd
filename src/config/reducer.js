export default (state, { data, type }) => {
  switch (type) {
    case 'SET_LOADING':
      return { ...state, loading: data };

    case 'SET_USER':
      return { ...state, loading: data.loading || false, me: data.me };

    default:
      return state;
  }
};
