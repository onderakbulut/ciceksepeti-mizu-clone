<template>
    <div class="container-lg">
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xxl-6 gx-3">
            
            <div class="col mb-3" v-for="product of products" v-bind:key="product.id">
                <Product v-bind:product="product"></Product>
            </div>            

        </div>
    </div>
</template>

<script>
import Product from '../components/ProductItem.vue';

export default {
    data(){
        return {
            products : []
        }
    },
    components: {
        Product: Product
    },
    methods : {
        async getProducts () {
            let response = await fetch('https://dummyjson.com/products?limit=12');
            let json = await response.json();
            this.products = json['products'];
        }
    },
    mounted() {
        this.getProducts();
    }

};

</script>

