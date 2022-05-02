import {
  ERROR_DATA,
  FILTER_DATA,
  GET_DATA,
  REQUEST_DATA,
  SORT_DATA,
} from './actionTypes';

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        filterData: [],
        products: [],
      };
    case ERROR_DATA:
      return {
        ...state,
        isLoading: false,
        isError: true,
        filterData: [],
        products: [],
      };
    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: payload,
      };
    
    default:
      return state;
  }
};
export { reducer };
