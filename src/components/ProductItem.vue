<template>
    <div class="product-item">
        <div class="product-image">
            <router-link :to="{ name: 'productsingle', params: {id: product.id}}">
                <img :src="product.thumbnail" alt="..." class="img-fluid" width="227" height="250">
            </router-link>
            <div class="fav-icon"><i class="lar la-heart"></i></div>
        </div>
        <div class="product-detail">
            <div class="product-badge">
                Same Day, Every Day / Free Delivery
            </div>
            <p class="product-name mb-1">
               {{ product.title }}
               {{ product.id }}
            </p>
            <div class="product-stars">
                <i class="las la-star" v-for="n of starActive"></i>
                <i class="las la-star passive" v-for="n of starPassive"></i>
                
            </div>
            <div class="price d-flex h4">
                <div class="price-currency">MX$ </div>
                <div class="price-final">{{ product.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                starActive : Math.floor(this.product.rating),
                starPassive : 5 - Math.floor(this.product.rating)
            }
        },
        props:['product']
    }
</script>

<style lang="css" scoped>
    .product-item {
        border:2px solid #edf1f2;
        border-radius: 4px;
        height: 100%;
    }
    .product-item:hover {
        box-shadow: 1px 1px 7px rgba(0,0,0,.4);
    }
    .product-image {
        position: relative;
    }
    .product-image img {
        aspect-ratio: 227 / 250;
        object-fit: cover;
    }
    .fav-icon  {
        width: 28px;
        height: 28px;
        position: absolute;
        right: 10px;
        top: 10px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#ef265c;
    }
    .product-detail {
        padding:7px 10px 15px;
    }
    .product-badge {
        color:#51b549;
        font-size: 14px;
    }
    .product-stars > i {
        font-size:20px;
        color:#e2e7e9;
    }
    .product-stars > i:not(.passive) {
        color: #ffc107;
    }
</style>