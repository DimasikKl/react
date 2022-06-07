const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  messages: [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'bay'},
  ] as Array<MessageType>,

  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Katy'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Nasty'},
    {id: 5, name: 'Oleg'},
  ] as Array<DialogType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;