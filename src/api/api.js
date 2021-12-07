import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'e295a78a-041d-4441-8a55-bb9c76824460'
  },
  baseURI: 'https://social-network.samuraijs.com/api/1.0/',

});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  }
}