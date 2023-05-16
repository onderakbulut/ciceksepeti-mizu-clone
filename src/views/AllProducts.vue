<template>
    <div class="container-lg">
        <AlertComp v-if="result" v-on:isVisible="result = $event" :type="'alert-warning'" :title="'Warning'" :desc="'Product not found!'" :isVisible="result"></AlertComp>
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xxl-6 gx-3">
            
            <div class="col mb-3" v-for="product of products" v-bind:key="product.id">
                <Product v-bind:product="product"></Product>
            </div>            

        </div>
    </div>
    <ul class="pagination justify-content-center mt-5" v-if="!result">
        <li class="page-item" v-if="page > 1"><a class="page-link" href="javascript:void(0)" v-on:click="pageDescrase">Previous</a></li>
        <li class="page-item" v-for="n in totalPage" v-bind:key="n">
            <RouterLink :to="{ name: 'allproducts', params: { page: n } }" class="page-link" v-bind:class="[ page == 1 && n == 1 ? 'active':null ]" activeClass="active">{{ n }}</RouterLink>
        </li>
        <li class="page-item" v-if="page < totalPage"><a class="page-link" href="javascript:void(0)" v-on:click="pageIncrease">Next</a></li>
    </ul>
</template>

<script>
import Product from '../components/ProductItem.vue';
import AlertComp from '../components/AlertComp.vue';

export default {
    data(){
        return {
            page : Number(this.$route.params.page) || 1,
            perPage : 18,
            start : 0,
            products : [],
            result : false,
            totalPage : 0
        }
    },
    components: {
        Product: Product,
        AlertComp
    },
    methods : {
        async getProducts () {
            this.start = (this.page - 1) * this.perPage;
            let response = await fetch(`https://dummyjson.com/products?limit=${this.perPage}&skip=${this.start}`);
            let json = await response.json();
            let total = json['total'];
            this.products = json['products'];
            
            if (this.products.length < 1){
                this.result = true;
            }
            
            this.totalPage = Math.ceil(total / this.perPage);

        },
        pageDescrase() {
            this.$router.push( {name : "allproducts", params: { page: (this.page - 1) }} );
        },
        pageIncrease(){
            let nextPage = Number(this.page) + 1;
            this.$router.push( {name : "allproducts", params: { page: nextPage }} );
        }

    },
    mounted() {
        this.getProducts();
    },
    watch : {
        "$route":function(to){
            this.page = to.params.page;
            this.getProducts();
        }
    },

};

</script>

