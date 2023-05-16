<template>
    <div id="sidebar" class="d-lg-none" v-bind:class="{'show' : data.menuActive}">
        <div class="vh-100 overflow-auto px-10">
            <div class="user-menu pt-15 d-flex justify-content-between">
                <button class="btn btn-solitude text-blue me-2">
                    <i class="las la-truck me-2"></i>
                    <span class="fs-12">Track Order</span>
                </button>
                <button class="btn btn-solitude text-blue">
                    <i class="las la-user me-2"></i>
                    <span class="fs-12"><RouterLink class="text-blue" to="/login">Sign in</RouterLink></span>
                </button>
            </div>
            <div class="sidebar-inner">
                <ul class="list-unstyled mt-15">
                    <li class="mb-2" v-for="category of state.categories" :key="category.id"><RouterLink :to="{ name: 'list', params: { category: category } }" class="px-10 d-block">{{ category }}</RouterLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useCategories } from '@/stores/categories';
import { useData } from '@/stores/data'

export default{
    setup () {
        const state = useCategories();
        const data = useData();

        return {state,data}
    }
}
</script>

<style lang="css">

#sidebar ul > li {
    line-height: 49px;
}
#sidebar ul > li:first-child {
    border-top:1px solid #edf1f2;
}
#sidebar ul > li:not(:last-child){
    border-bottom:1px solid #edf1f2;
}
#sidebar .user-menu i {
    font-size: 22px;
}
#sidebar .user-menu button {
    padding: 11px 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}
#sidebar {
    margin-left:-280px;
    overflow-y: auto;
    width: 280px;
    background-color: #fff;
    transition: .3s;
    flex:0 0 auto;
    position: relative;
    z-index: 1022;
}
.content {
    transition: .3s;
    
    width:100%;
}
body.menu-active,
.menu-active .wrapper {
    overflow: hidden;
}
@media (max-width:992px) {
    body.menu-margin .content {
        margin-right: -280px;
    }
}
#sidebar.show {
    margin-left:0;
}
</style>