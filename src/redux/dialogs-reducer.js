const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
  ],
  newMessageBody: ''
};

const dialogsReducer = (state =initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 4, message: body});
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;