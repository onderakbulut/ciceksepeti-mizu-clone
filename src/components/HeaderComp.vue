<template>
    <div class="overlay" v-on:click="menuClose"></div>
    <div class="text-center bg-brush d-none d-lg-block">
        <img src="@/assets/images/top-banner.gif" alt="" class="img-fluid">
    </div>
    <div class="header-top border-bottom border-porcelain d-none d-lg-block">
        <div class="container d-flex justify-content-end">
            <ul class="list-inline mb-0">
                <li class="list-inline-item"><a class="lh-40" href="#">Sell On Mizu</a></li>
                <li class="list-inline-item dropdown dropdown-hover-lg">
                    <a href="#" class="dropdown-icon lh-40" data-bs-toggle="dropdown">Language: EN</a>
                    <div class="dropdown-menu">
                        <ul class="list-unstyled">
                            <li><a class="d-block" href="#">English EN</a></li>
                            <li><a class="d-block" href="#">Espanol ES</a></li>
                        </ul>
                    </div>
                </li>
                <li class="list-inline-item dropdown dropdown-hover-lg">
                    <a href="#" class="dropdown-icon lh-40" data-bs-toggle="dropdown">Currency: MX$</a>
                    <div class="dropdown-menu">
                        <ul class="list-unstyled">
                            <li><a class="d-block" href="#">Colombian Peso C$</a></li>
                            <li><a class="d-block" href="#">U.S. Dollar USD</a></li>
                            <li><a class="d-block" href="#">Mexican Peso MXN</a></li>
                        </ul>
                    </div>
                </li>
                <li class="list-inline-item dropdown dropdown-hover-lg">
                    <a href="#" class="dropdown-icon lh-40" data-bs-toggle="dropdown">Send To: <img class="flag-icon" src="@/assets/icons/mexico-flag.svg" width="26" height="16" alt=""></a>
                    <div class="dropdown-menu">
                        <ul class="list-unstyled">
                            <li><a class="d-block" href="#"><img class="flag-icon me-1" src="@/assets/icons/mexico-flag.svg" width="26" height="16" alt=""> Mexico </a></li>
                            <li><a class="d-block" href="#"><img class="flag-icon me-1" src="@/assets/icons/colombia-flag.svg" width="26" height="16" alt=""> Colombia </a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>            
    </div>
    <div class="container-lg">
        <div class="header-middle pt-12 py-lg-12">
            <a href="#" v-on:click="menuPush" class="menu-button d-lg-none" v-bind:class="{'is-active' : data.menuActive}" id="menuButton">
                <span class="burger-icon"></span>
            </a>
            <div class="site-logo mx-auto mx-lg-0">
                <RouterLink to="/"><img src="@/assets/images/logo.png" alt="" class="img-fluid"></RouterLink>
            </div>
            <div class="user-menu ms-auto">
                <ul class="list-inline mb-0 d-flex align-items-center">
                    <li class="list-inline-item d-none d-lg-inline-block"><a href="#" class="fs-22"><i class="las la-truck"></i> <span class="fs-18">Track Order</span> </a></li>
                    <li v-if="user.userLogged == false || user.userLogged == null" class="list-inline-item d-none d-lg-inline-block dropdown dropdown-hover-lg">
                        <a href="#" class="dropdown-icon fs-22 lh-40" data-bs-toggle="dropdown"><i class="las la-user"></i> <span class="fs-18">Sign in</span> </a>
                        <div class="dropdown-menu">
                            <ul class="list-unstyled">
                                <li><RouterLink to="/login" class="d-block btn btn-green text-white">Sign in</RouterLink></li>
                                <li><RouterLink to="/register" class="d-block btn btn-link w-100 border-porcelain">Sign Up</RouterLink></li>
                            </ul>
                        </div>
                    </li>
                    <li v-else class="list-inline-item d-none d-lg-inline-block dropdown dropdown-hover-lg">
                        <a href="#" class="dropdown-icon fs-22 lh-40" data-bs-toggle="dropdown"><i class="las la-user"></i> <span class="fs-18">Hello {{ this.user.userName }}</span> </a>
                        <div class="dropdown-menu">
                            <ul class="list-unstyled">
                                <li><RouterLink to="/logout" class="d-block btn btn-green text-white">Logout</RouterLink></li>
                            </ul>
                        </div>
                    </li>
                    <li class="list-inline-item">
                        <button v-on:click="cartPush" class="btn btn-green btn-cart fs-35 p-0 text-white d-flex align-items-center justify-content-center position-relative">
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-12" v-if="cart.count() > 0">
                                {{ cart.count() }}
                            </span>
                            <i class="las la-shopping-cart"></i>
                        </button>
                    </li>
                </ul>
            </div>    
            <div class="search-bar pt-10 pt-lg-0 border-top border-2 border-porcelain border-lg-0 position-relative">
                <div class="input-group">
                    <input type="text" class="form-control border-2 border-nobel" placeholder="Search for unique products" v-model="term" @keyup="search">
                    <button class="btn btn-green btn-search text-white d-flex align-items-center justify-content-center"><i class="las la-search"></i></button>
                </div>
                <div class="search-wrapper" v-if="isActive">
                    <ul class="search-result list-unstyled mb-0">
                        <li v-for="product of products" :key="product.id">
                            <router-link :to="{ name: 'productsingle', params: {id: product.id}}" class="d-flex align-items-center p-10">
                                <div class="result-image me-2">
                                    <img :src="product.thumbnail" alt="" width="64" height="64">
                                </div>
                                <div class="result-desc">
                                    <p class="mb-0">{{ product.brand }} {{ product.title }}"</p>
                                    <p class="mb-0 fw-bold">{{ product.price }}</p>
                                </div>
                                <div class="ms-auto result-category">
                                    <a href="">{{ product.category }}</a>
                                </div>
                            </router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bottom border-top border-bottom border-porcelain d-none d-lg-block sticky-top top-0 bg-white">
        <div class="container">
            <!-- navbar start -->
            <nav class="navbar-nav navbar-expand-lg  position-relative" id="mynavbar">
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown mega-dropdown-main">
                            <a class="nav-link" href="#" data-bs-toggle="dropdown">CATEGORİES </a>
                            <div class="dropdown-menu mega-dropdown">
                                <RouterLink to="/allproducts" class="d-block mb-3">View all products <i class="las la-angle-right fs-14"></i></RouterLink>
                                <ul class="list-unstyled row row-cols-5">
                                    <li class="mb-2" v-for="category of state.categories" :key="category.id"><RouterLink :to="{ name: 'list', params: { category: category } }">{{ category }}</RouterLink></li>
                                   
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">PAGES</a>
                            <ul class="dropdown-menu">
                                <li class="mb-2"><RouterLink to="/login">Login</RouterLink></li>
                                <li class="mb-2"><RouterLink to="/register">Register</RouterLink></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
            <!-- navbar end -->
        </div>   
    </div>
</template>


<script>
import { useCategories } from '@/stores/categories'
import { useData } from '@/stores/data'
import { usecartStore } from '@/stores/cart'
import { useUser } from '../stores/user'

    export default{
        setup(){
            const state = useCategories()
            const data = useData()
            const cart = usecartStore()
            const user = useUser()

            state.getCategories();

            return {state, data, cart, user};
        },
        data(){
            return {
                subCategory:0,
                term : '',
                isActive : false,
                products : ''
            }
        },
        methods: {
            search() {
                if(this.term != ''){
                    this.isActive = true;
                    this.getProducts(this.term);
                }
                else {
                    this.isActive = false;
                }
            },
            async getProducts(term) {
                let response = await fetch('https://dummyjson.com/products/search?q='+term)
                let json = await response.json();
                this.products = json['products'];
            },
            menuPush(){
                this.data.menuPush();
            },
            menuClose(){
                this.data.cartClose();
                this.data.menuClose();
            },
            cartPush() {
                this.data.cartPush();
            }
        },
        mounted(){
            document.addEventListener('click', (e) => {
                if(e.target.closest('.search-bar') && this.term.length != ''){
                    this.isActive = true;
                }
                else {
                    this.isActive = false;
                }
            })
        }
    }

  
</script>

<style lang="css" scoped>
.search-result {
    max-height: 400px;
    overflow-y: auto;
}
.search-result::-webkit-scrollbar {
  width: 8px;
}
.search-result::-webkit-scrollbar-thumb {
  background: #adadad;
}
.result-category > a {
    color:#b1b1b1;
}
.search-result li:not(:last-child) {
    border-bottom:1px solid #edf1f2;
}
.search-result li:hover {
    background-color: #f5f5f5;
}
.search-wrapper {
    position: absolute;
    background-color: white;
    left: 0;
    top: 100%;
    width: 100%;
    height: auto;
    box-shadow: 0 1px 6px 0 rgba(2,2,2,.16);
    border-radius: 10px;
    padding: 10px 0;
    z-index: 1021;
}
</style>

