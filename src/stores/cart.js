import { defineStore } from "pinia";

export const usecartStore = defineStore('cartStore', {
    state: () => {
        return { 
            cartItems : JSON.parse(localStorage.getItem('cart')) || []
        }
    },
    actions: {
        addToCart(item) {
            if(this.cartItems.length == 0){
                this.cartItems.push(item);
            }
            else {
                let index = this.cartItems.findIndex(element => element.id === item.id);
                if(index == -1) {
                    this.cartItems.push(item);
                }
                else {
                    this.cartItems[index].quantity += 1;
                }
                
            }
            localStorage.setItem('cart',JSON.stringify(this.cartItems))
        },
        increase(id){
            let index = this.cartItems.findIndex(element => element.id === id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
            }
            localStorage.setItem('cart',JSON.stringify(this.cartItems))
        },
        decrease(id){
            let index = this.cartItems.findIndex(element => element.id === id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(element => element.id !== id);
                }
            }
            localStorage.setItem('cart',JSON.stringify(this.cartItems))
        },
        removeToCart(id) {
            this.cartItems = this.cartItems.filter(item => item.id != id)
            localStorage.setItem('cart',JSON.stringify(this.cartItems))
        },
        getTotal(){
            let sum = Object.keys(this.cartItems).reduce((prev, next) => {
                return prev + this.cartItems[next].price * this.cartItems[next].quantity;
            }, 0);
            return sum;
        },
        subTotal(id) {
            let index = this.cartItems.findIndex(element => element.id === id);
            return this.cartItems[index].price * this.cartItems[index].quantity;
           
        },
        count() {
            return Object.keys(this.cartItems).reduce((prev, next) => {
                return prev + this.cartItems[next].quantity;
            }, 0);
        }
    }
}) 