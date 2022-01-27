import * as axios from "axios";
import {follow} from "../redux/users-reducer";

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '32781577-e0d4-4f78-b191-2a2e8126994b'
  },
  baseURI: 'https://social-network.samuraijs.com/api/1.0/',

});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object.')
    return profileAPI.getProfile(userId);
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
}
