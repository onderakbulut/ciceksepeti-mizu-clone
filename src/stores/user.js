import { defineStore } from "pinia";

export const useUser = defineStore('userStore',{
    state : () => ({
        token : null,
        userLogged : sessionStorage.getItem("userLogged") || false,
        userName : sessionStorage.getItem("userName") || null,
        email : sessionStorage.getItem("email") || null
    })
    
});