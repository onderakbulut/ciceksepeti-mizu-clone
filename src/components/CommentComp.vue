<template>
    <div class="comments py-3 py-lg-45">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center mb-3">
                        <h4>Reviews ({{ total }})</h4>
                        <div class="product-stars">
                            <i class="las la-star" v-for="n of starActive" :key="n"></i>
                            <i class="las la-star passive" v-for="n of starPassive" :key="n"></i>
                        </div>
                    </div>
                    <div class="border border-pattens p-3">
                        <div class="comment-item py-14" v-for="comment in comments" :key="comment.id">
                            <p class="mb-2">{{ comment.body }}</p>
                            <p class="mb-0">{{ comment.user.username }}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            comments : '',
            total : ''
        }
    },
    props:{
        id : Number,
        starActive : Number,
        starPassive : Number
    },
    methods:{
        async getComments(){
            let response = await fetch('https://dummyjson.com/comments/post/'+this.id);
            let json = await response.json();
            this.total = json['total'];
            this.comments = json['comments'];
        }
    },
   mounted(){
        this.getComments();
   }
}
</script>

<style lang="css" scoped>
.comment-item:not(:last-child) {
    border-bottom:1px solid #e2e7e9;
}
.product-stars > i {
    font-size:20px;
    color:#e2e7e9;
}
.product-stars > i:not(.passive) {
    color: #ffc107;
}
</style>