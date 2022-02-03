const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'bay'},
  ],
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Nasty'},
    {id: 5, name: 'Oleg'},
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}],
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;