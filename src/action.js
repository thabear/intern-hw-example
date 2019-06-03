const TYPES = {
  BEGIN_DONE_ITEM: "BEGIN_DONE_ITEM",
  SUCCESS_DONE_ITEM: "SUCCESS_DONE_ITEM",
  ADD_ITEM: "ADD_ITEM"
} 

const beginDoneItem = (id) => ({
  type: TYPES.BEGIN_DONE_ITEM,
  payload: id
});

const successDoneItem = (quote) => ({
  type: TYPES.SUCCESS_DONE_ITEM,
  payload: quote
})

const addItem = (nameList, highestIndex) => ({
  type: TYPES.ADD_ITEM,
  payload: {
    nameList,
    highestIndex
  }
});

function doneItem(itemId) {
  // fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((quote) => {
  //     return JSON.stringify(quote[0].content);
  //   });
  console.log(itemId);
  return (dispatch) => {
    dispatch(beginDoneItem(itemId));

    // let response = await fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
    // let quote = await response.json();

    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {cache: 'no-cache'})
    .then((response) => {
      return response.json();
    })
    .then((quote) => {
      dispatch(successDoneItem(JSON.stringify(quote[0].content)));
    });

    // return (dispatch) => {
    //   console.log('here')
    //   dispatch(successDoneItem(quote[0].content))
    // };
  
  }
}

export default {
  doneItem,
  addItem,
  TYPES
};