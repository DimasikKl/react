let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'hello world!', likeCount: 12},
      {id: 2, message: 'hi', likeCount: 55},
      {id: 3, message: 'hello russion!', likeCount: 0},
    ],
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
  },
}

export default state;