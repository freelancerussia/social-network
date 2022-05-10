import axios from "axios";

let instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      "API-KEY": "a897fd07-b0ba-4571-9df5-d4d24e8009a5"
   }
});

export const usersAPI = {

   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
   },

   addAsFrind(id) {

      return instance.post('follow/' + id)
   },

   removeFromFrinds(id) {
      return instance.delete(`follow/${id}`)
   },




}

export const profileAPI = {
   setProfile(id) {
      return instance.get(`profile/${id}`)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, { status })
   }
}

export const authAPI = {
   setAuthData() {
      return instance.get(`auth/me`)
   }
}
