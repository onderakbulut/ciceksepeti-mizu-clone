<template>
    <div class="container mb-3 mb-lg-45">
        <div class="row">
            <div class="col-lg-6 mb-2 mb-lg-0">
                <div class="row">
                    <div class="col-md-2 col-lg-2 order-2 order-md-1">
                        <div class="swiper product-thumbs">
                            <div class="swiper-wrapper">
                                <!-- <div class="swiper-slide">
                                    <img src="@/assets/images/detail1.jpeg" alt="...">
                                </div> -->
                                <div class="swiper-slide" v-for="image in images" :key="image">
                                    <img :src="image">
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 col-lg-10 order-1 order-md-2 mb-2 mb-lg-1">
                        <div class="swiper product-gallery">
                            <div class="swiper-wrapper">
                                <!-- <div class="swiper-slide">
                                    <vue-image-zoomer 
                                        regular="/src/assets/images/detail1.jpeg" 
                                        zoom="/src/assets/images/detail1-big.jpeg"
                                        :click-zoom="true"
                                    />
                                </div> -->
                                <div class="swiper-slide" v-for="image in images" :key="image">
                                    <img :src="image" alt="..." class="img-fluid mx-auto">
                                </div>

                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-lg-6">
                <div class="product-detail bg-azure p-10 px-lg-20 py-lg-17 border-porcelain rounded-2 mb-10">
                    <h3>{{ name }}</h3>
                    <p>{{ description }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="price-wrapper">
                            <span class="price-symbol"> MX$</span>
                            <span class="price">{{ price }}</span>
                        </div>
                        <div class="rating-wrapper fs-22 text-center">
                            <div class="product-stars">
                                <i class="las la-star" v-for="n of starActive" :key="n"></i>
                                <i class="las la-star passive" v-for="n of starPassive" :key="n"></i>
                            </div>
                            <span role="button" class="fs-18 text-decoration-underline" v-on:click="scrollTo">Reviews</span>
                        </div>
                    </div>
                </div>
                <div class="delivery bg-azure border-porcelain rounded-2 p-10 mb-10">
                    <div class="form-item position-relative">
                        <i class="las la-map-marker"></i>
                        <input type="text" class="form-control form-control-lg rounded-2"
                            placeholder="Search for a district or a street">
                    </div>
                </div>
                <div class="sale-features">
                    <ul class="list-inline fs-18 d-flex flex-nowrap overflow-auto pb-3 mb-0">
                        <li class="list-inline-item flex-shrink-0">
                            <i class="las la-check-circle"></i> FREE DELIVERY
                        </li>
                        <li class="list-inline-item flex-shrink-0">
                            <i class="las la-truck"></i> SAME DAY, EVERY DAY
                        </li>
                        <li class="list-inline-item flex-shrink-0">
                            <i class="las la-lock"></i> SECURE PAYMENT
                        </li>
                    </ul>
                </div>
                <div class="product-action d-flex">
                    <button class="btn btn-green fs-20 text-white w-100 w-lg-auto px-lg-104 me-2" v-bind:data-id="id" quantitiy="1" v-on:click="addToCart">Add To Cart</button>
                    <div class="fav-icon flex-shrink-0"><i class="lar la-heart"></i></div>
                </div>

            </div>
        </div>
    </div>
    <div class="payment-options border-top border-bottom border-pattens">
        <div class="container py-3 py-lg-45">
            <h4>Payment Options</h4>
            <ul class="list-inline">
                <li class="list-inline-item"><img src="@/assets/images/payment-logo-1.jpg" alt=""></li>
                <li class="list-inline-item"><img src="@/assets/images/payment-logo-2.jpg" alt=""></li>
                <li class="list-inline-item"><img src="@/assets/images/payment-logo-3.jpg" alt=""></li>
                <li class="list-inline-item"><img src="@/assets/images/payment-logo-4.jpg" alt=""></li>
                <li class="list-inline-item"><img src="@/assets/images/payment-logo-5.jpg" alt=""></li>
                <li class="list-inline-item"><img src="@/assets/images/payment-logo-6.jpg" alt=""></li>
            </ul>
            <i class="las la-exclamation-circle"></i>
            Mizu keeps your payment information secure, and your credit card details are not visible to anyone during payment process.
        </div>
    </div>
    <comment :id="id" :starActive="starActive" :starPassive="starPassive"></comment>
</template>


<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css';
import comment from '../components/CommentComp.vue'

import { usecartStore } from '@/stores/cart';
import { useData} from '@/stores/data'

export default {
    setup() {
        const cart = usecartStore();
        const data = useData();

        return {cart, data};
    },
    data(){
        return {
            id : Number(this.$route.params.id) || 1,
            name : null,
            price : null,
            rating : null,
            starActive: null,
            starPassive: null,
            images : null,
            description: null,
            thumbnail : null           

        }
    },
    components: {
        VueImageZoomer,
        comment : comment
    },
    methods: {
        async getProduct(){
            let response = await fetch('https://dummyjson.com/products/'+this.id);
            let json = await response.json();
            this.name = json['title'];
            this.price = json['price'];
            this.rating = json['rating'];
            this.starActive = Math.floor(this.rating),
            this.starPassive = 5 - Math.floor(this.rating)
            this.images = json['images'];
            this.description = json['description'];
            this.thumbnail = json['thumbnail'];
        },
        scrollTo(){
            document.querySelector(".comments").scrollIntoView();
        },
        addToCart() {
            this.cart.addToCart(
                {
                    id : this.id,
                    name : this.name,
                    price : this.price,
                    thumb : this.thumbnail,
                    quantity : 1
                }
            );
            this.data.cartPush();
        }
    },
    mounted() {
        
        this.getProduct();
        var productThumbs = new Swiper('.product-thumbs', {

            centeredSlides: false,
            loop: false,
            slideToClickedSlide: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    direction: 'horizontal',
                    spaceBetween: 4,
                    slidesPerView: 4,
                    loopedSlides: 4,
                },
                768: {
                    direction: 'vertical',
                    slidesPerView: 4,
                    loopedSlides: 4,
                    spaceBetween: 0,
                },

            }
        });
        var productSlider = new Swiper('.product-gallery', {
            lazy: true,
            spaceBetween: 0,
            centeredSlides: false,
            loop: false,
            direction: 'horizontal',
            loopedSlides: 4,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            resizeObserver: true,
            thumbs: {
                swiper: productThumbs
            },

        });

    }
}

</script>

<style lang="css" scoped>
.product-stars > i {
    font-size:20px;
    color:#e2e7e9;
}
.product-stars > i:not(.passive) {
    color: #ffc107;
}
.payment-options img {
    height: 54px;
}

.fav-icon {
    width: 60px;
    height: 60px;
    border:1px #ef265c solid;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#ef265c;
}
.fav-icon i {
    font-size:32px;
}
.sale-features .list-inline-item:not(:last-child){
    border-right: 1px solid #e2e7e9;
}
.sale-features .list-inline-item {
    margin:0;
    padding:0 16px;
    position: relative
}
.sale-features i {
    font-size:24px;
    color:#51b549;
    margin-right: 6px;
    position: relative;
    bottom: -2px;
}
.form-item>i {
    font-size: 32px;
    position: absolute;
    top: 11px;
    left: 17px;
    color: #51b549;
}

.form-item input {
    border: 2px solid #edf1f2;
    height: 55px;
    padding: 0 20px 0 60px;
}

input::placeholder {
    color: #ccc;
    font-size: 16px;
}

input:focus {
    border-color: #cfdadd;
}

.price-symbol {
    font-size: 1.25rem;
}

.price {
    font-size: 2.5rem;
}

.product-thumbs {
    height: 100%;
    max-height: 500px;
}

.product-thumbs .swiper-slide>img {
    border: 2px solid transparent;
    cursor: pointer;
}

.product-thumbs .swiper-slide>img {
    height: 100%;
    max-width: 100%;
    object-fit: contain;
}

.product-thumbs .swiper-slide>img.play-icon {
    -o-object-fit: contain;
    object-fit: contain;
}

.product-thumbs .swiper-slide-thumb-active>img {
    border-color: var(--dark);
}
.product-gallery .swiper-slide {
    height: unset;
    display: flex;
    align-items: center;
    justify-content: center;
}
.product-gallery .swiper-slide>img {
    display: block;
}

.product-gallery .swiper-button-next,
.product-gallery .swiper-button-prev {
    border: 2px solid #222;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    color: var(--dark);
}

.product-gallery .swiper-button-next:not(.swiper-button-disabled):hover,
.product-gallery .swiper-button-prev:not(.swiper-button-disabled):hover {
    background-color: var(--blue);
    color: var(--white);
    border-color: var(--blue);
}

.product-gallery .swiper-button-prev:after,
.product-gallery .swiper-button-next:after {
    font-size: 16px;
    font-weight: 600;
}

.product-gallery:hover .swiper-button-next:not(.swiper-button-disabled),
.product-gallery:hover .swiper-button-prev:not(.swiper-button-disabled) {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}

.product-gallery:hover .swiper-button-next.swiper-button-disabled,
.product-gallery:hover .swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    -webkit-transform: scale(1);
    transform: scale(1);
}
@media (min-width:992px) {
    .product-thumbs .swiper-slide>img {
        width: 101px;
        height: 101px;
        object-fit: cover;
    }
}

</style>