import ACTIONS from "./action.js";

const defaultState = {
  nameList: [{id: 1, name: "Abraham", date: "2016-08-10", priority: "Low"}, {id: 2, name: "Betsy", date: "2016-05-08", priority: "High"}, {id: 3, name: "Johnny", date: "2017-01-30", priority: "Med"}, {id: 4, name: "Jameson", date: "2017-03-04", priority: "Med"}, {id: 5, name: "Randy", date: "2018-02-10", priority: "High"}, {id: 6, name: "Kendra", date: "2019-02-15", priority: "Med"}, {id: 7, name: "Mathis", date: "2017-02-11", priority: "Low"}, {id: 8, name: "Ben", date: "2019-04-11", priority: "Med"}, {id: 9, name: "Cindy", date: "2014-07-01", priority: "High"}, {id: 10, name: "Neymar", date: "2016-09-10", priority: "Med"}, {id: 11, name: "Daniel", date: "2019-10-10", priority: "Low"}, {id: 12, name: "Xavier", date: "2018-04-04", priority: "Med"}],
  highestIndex: 12,
  // nameList: [],
  // highestIndex: 0,
  quote: ''
}

const listReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTIONS.TYPES.BEGIN_DONE_ITEM: {
      let nameList = state.nameList;
      // let quote = getQuote().then((quote) => {return quote}).resolve();
      // console.log(quote);
      nameList = nameList.filter((item) => { return item.id !== action.payload})
      
      return {
        ...state,
        nameList
      }
    }
    case ACTIONS.TYPES.SUCCESS_DONE_ITEM: {
      let quote = action.payload;
      return {
        ...state,
        quote
      }
    }
    case ACTIONS.TYPES.ADD_ITEM: {
      return {
        nameList: action.payload.nameList,
        highestIndex: action.payload.highestIndex
      }
    }
    default:
      return state;
  }
}

export default listReducer;