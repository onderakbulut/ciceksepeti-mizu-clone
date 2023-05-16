import { defineStore } from 'pinia'



export const useCategories = defineStore('categoryStore', {
  state: () => ({ 
    categories: [] 
  }),
  actions: {
    async getCategories() {
      let response = await fetch('https://dummyjson.com/products/categories')
      let json = await response.json();
      this.subCategory = Math.ceil(json.length / 8 );
      this.categories = json;
    }
  }
})