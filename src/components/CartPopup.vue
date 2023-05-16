<template>
     <div class="cart-popup" v-bind:class="{'show' : state.cartActive}">
        <div class="cart-popup-inner h-100 d-flex flex-column">
            <div class="cart-popup-header d-flex justify-content-between align-items-center p-3 p-lg-30">
                <h3>My Cart</h3>
                <a href="javascript:void(0);" v-on:click="cartClose" class="close-cart text-reset"><i class="las la-times fs-24"></i></a>
            </div>
            <div class="cart-popup-content d-flex flex-column justify-content-between h-100">
                <div class="position-relative h-100 overflow-auto">
                   <div class="position-absolute top-0 bottom-0 start-0 end-0 px-3 px-lg-30 ">
                        <div class="cart-popup-item border-top border-whisper py-3 py-lg-30 d-flex align-items-center" v-for="item in cart.cartItems" v-bind:key="item.id">
                            <img v-bind:src="item.thumb"  alt="..." class="me-3 me-lg-30" width="100" height="133">
                            <div class="w-100">
                                <p class="text-woodsmoke position-relative">
                                    {{ item.name }}
                                    
                                    <a href="javascript:void(0)" class="position-absolute top-0 end-0" v-on:click="deleteItem(item.id)"><i class="las la-times fs-24"></i></a>
                                </p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="quantity d-flex">
                                        <button class="minus bg-white text-black" v-on:click="decrease(item.id)"><i class="las la-minus fs-15"></i></button>
                                        <input type="number" class="qty text-center" step="1" min="0" max="9999" v-bind:value="item.quantity">
                                        <button class="plus bg-white text-black" v-on:click="increase(item.id)"><i class="las la-plus fs-15"></i></button>
                                    </div>
                                    <div class="cart-price">
                                        <ins class="text-decoration-none fw-500">$ {{ this.cart.subTotal(item.id) }}</ins>
                                    </div>
                                </div> 
                            </div>
                        </div>
                   </div>
                </div>
                <div class="cart-popup-footer bg-athens p-3 p-lg-30">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <p class="mb-0 text-woodsmoke">Sub-total</p>
                        <h5 class="fw-600 mb-0">$ {{ cart.getTotal() }}</h5>
                    </div>
                    <p class="text-dove">Shipping, taxes, and discounts codes calculated at checkout.</p>
                    <button class="btn btn-green rounded-0 w-100 btn-custom fs-14 mb-3 text-white">PROCEED TO CHECKOUT</button>
                    <div class="text-center">
                        <a href="#" class="text-black text-decoration-underline">View Cart</a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useData } from '@/stores/data'
import { usecartStore } from '@/stores/cart';

    export default {
        setup(){
            const state = useData()
            const cart = usecartStore()
            
            return {state, cart};
        },
        methods : {
            cartClose () {
                this.state.cartClose();
            },
            deleteItem(e){
                this.cart.removeToCart(e);
            },
            increase(e){
                this.cart.increase(e);
            },
            decrease(e){
                this.cart.decrease(e);
            }
        }

    }
</script>

<style lang="css" scoped>

.cart-popup {
    width: 340px;
    background: #FFFFFF;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1052;
    -webkit-transform: translate3d(104%, 0, 0);
            transform: translate3d(104%, 0, 0);
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
}

.cart-popup.show {
    -webkit-transform: none;
    transform: none;
}

.cart-popup-footer {
    opacity: 0;
    -webkit-transform: translateY(45px);
    transform: translateY(45px);
}

.cart-popup.show .cart-popup-footer {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: opacity .25s cubic-bezier(.25, .46, .45, .94) .45s, transform .25s cubic-bezier(.25, .46, .45, .94) .45s;
    -webkit-transition: opacity .25s cubic-bezier(.25, .46, .45, .94) .45s, -webkit-transform .25s cubic-bezier(.25, .46, .45, .94) .45s;
    transition: opacity .25s cubic-bezier(.25, .46, .45, .94) .45s, -webkit-transform .25s cubic-bezier(.25, .46, .45, .94) .45s;
    transition: opacity .25s cubic-bezier(.25, .46, .45, .94) .45s, transform .25s cubic-bezier(.25, .46, .45, .94) .45s;
    transition: opacity .25s cubic-bezier(.25, .46, .45, .94) .45s, transform .25s cubic-bezier(.25, .46, .45, .94) .45s, -webkit-transform .25s cubic-bezier(.25, .46, .45, .94) .45s
}

.quantity {
    width: 88px;
}

.quantity input[type=number] {
    width: 40px;
    height: 34px;
    background: 0 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    color: #222;
}

.quantity input[type=number]::-webkit-outer-spin-button,
.quantity input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.quantity input[type=number]:focus {
    outline: none;
}

.quantity>button {
    border: 2px solid #EEEEEE;
}

.quantity>input[type=number] {
    border-top: 2px solid #EEEEEE;
    border-bottom: 2px solid #EEEEEE;
    border-left: 0;
    border-right: 0;
}

.btn-custom {
    height: 48px;
}

.custom-scroll::-webkit-scrollbar {
    display: block
}

.custom-scroll::-webkit-scrollbar {
    width: 3px
}

.custom-scroll::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .15)
}

.custom-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .25)
}
.cart-popup-item  > img {
    display: block;
    aspect-ratio: 100 / 133;
    object-fit: contain;
}
@media (min-width:992px) {
    .cart-popup {
        width:400px;
    }
}
</style>