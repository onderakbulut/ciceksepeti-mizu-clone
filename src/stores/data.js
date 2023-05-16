import { defineStore } from 'pinia'

export const useData = defineStore('dataStore',{
  state: () => ({ 
    menuActive: false,
    cartActive: false
  }),
  actions : {
    menuPush(){
        if(!document.querySelector('body').classList.contains('menu-active')){
          document.querySelector('body').classList.add('menu-active', 'menu-margin');
          this.menuActive = true
        }
    },
    menuClose(){
      if(document.querySelector('body').classList.contains('menu-active') && this.menuActive == true){
        document.querySelector('body').classList.remove('menu-active', 'menu-margin');
        this.menuActive = false
      }
    },
    cartPush(){
        if(!document.querySelector('body').classList.contains('menu-active')){
          document.querySelector('body').classList.add('menu-active');
          this.cartActive = true
        }
    },
    cartClose() {
      if(document.querySelector('body').classList.contains('menu-active') && this.cartActive == true){
        document.querySelector('body').classList.remove('menu-active');
        this.cartActive = false
      }
    }
  }

})


