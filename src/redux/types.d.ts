declare type SetReduxTestAction = {
  type: 'SET_REDUX_TEST';
  reduxTest: boolean;
};

declare type ActionTypes = SetReduxTestAction;

declare type Data = {
  reduxTest: boolean;
};

declare type ReduxState = {
  data: MyUserData;
};
