import axios from "axios";

let instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      "API-KEY": "a897fd07-b0ba-4571-9df5-d4d24e8009a5"
   }
});

export let usersAPI = {

   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
   },

   addAsFrind(id) {

      return instance.post('follow/' + id)
   },

   removeFromFrinds(id) {
      return instance.delete(`follow/${id}`)
   },

   setProfile(id) {
      return instance.get(`profile/${id}`)
   },

   setAuthData() {
      return instance.get(`auth/me`)
   }
}