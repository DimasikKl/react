import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'hello world!', likeCount: 12},
        {id: 2, message: 'hi', likeCount: 55},
        {id: 3, message: 'hello russion!', likeCount: 0},
      ],
      newPostText: 'Dima',
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;