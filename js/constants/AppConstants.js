var ActionTypes = [
  "GET_ALL_RESULTS",
  "RECEIVE_RESULTS"
];

var ActionTypes = ActionTypes.reduce(function(obj, str){obj[str] = str; return obj;}, {});

module.exports = ActionTypes;
