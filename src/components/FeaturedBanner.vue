<template>
    <div class="container-lg">
        <div class="featured-banner">
            <div class="first">
                <RouterLink to="/allproducts">
                    <picture>
                        <source media="(min-width: 576px)" srcset="../assets/images/banner-1.jpg">
                        <source media="(max-width: 575.98px)" srcset="../assets/images/banner-1m.jpg">
                        <img src="../assets/images/banner-1.jpg" alt="..." class="w-100 h-100">
                    </picture>
                </RouterLink>
            </div>
            <div class="second d-flex flex-column align-items-center justify-content-between">
                <RouterLink to="/allproducts">
                    <picture class="w-100">
                        <source media="(min-width: 576px)" srcset="../assets/images/banner-2.jpg">
                        <source media="(max-width: 575.98px)" srcset="../assets/images/banner-2m.jpg">
                        <img src="../assets/images/banner-2.jpg" alt="..." class="w-100">
                    </picture>
                </RouterLink>
                <RouterLink to="/allproducts">
                    <picture class="w-100">
                        <source media="(min-width: 576px)" srcset="../assets/images/banner-3.jpg">
                        <source media="(max-width: 575.98px)" srcset="../assets/images/banner-3m.jpg">
                        <img src="../assets/images/banner-3.jpg" alt="..." class="w-100">
                    </picture>
                </RouterLink>
            </div>
            <div class="third d-flex flex-column flex-sm-row flex-md-column align-items-center justify-content-between">
                <RouterLink to="/allproducts">
                    <picture class="w-100">
                        <source media="(min-width: 576px)" srcset="../assets/images/banner-4.jpg">
                        <source media="(max-width: 575.98px)" srcset="../assets/images/banner-4m.jpg">
                        <img src="../assets/images/banner-4.jpg" alt="..." class="w-100">
                    </picture>
                </RouterLink>
                <RouterLink to="/allproducts">
                    <picture class="w-100">
                        <source media="(min-width: 576px)" srcset="../assets/images/banner-5.jpg">
                        <source media="(max-width: 575.98px)" srcset="../assets/images/banner-5m.jpg">
                        <img src="../assets/images/banner-5.jpg" alt="..." class="w-100">
                    </picture>
                </RouterLink>
            </div>
            <div class="fourth d-none d-xxl-flex flex-column align-items-center justify-content-between">
                <RouterLink to="/allproducts">
                    <img src="../assets/images/banner-6.jpg" alt="..." class="w-100">
                </RouterLink>
                <RouterLink to="/allproducts">
                    <img src="../assets/images/banner-7.jpg" alt="..." class="w-100">
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style lang="css" scoped>
    .featured-banner {
        display: grid;
        grid-gap: 8px;
    }
    .featured-banner img {
        transition: all .1s;
        border-radius: 4px;
        cursor: pointer;
    }
    .featured-banner img:hover {
        box-shadow: 1px 1px 7px rgba(0,0,0,.4);
    }
    .first ~ div {
        grid-row-gap: 8px;
    }
    @media(min-width:576px){
        .featured-banner {
            grid-template-columns: 2fr 1fr;
            grid-template-areas:
                'first second'
                'third third';
        }
        .first {
            grid-area:first;
        }
        .second {
            grid-area:second;
        }
        .third {
            grid-area: third;
            grid-gap: 4px;
        }
        .third > img.w-100 {
            max-width: calc(50% - 4px);
        }
    }
    @media(min-width:768px){
        .featured-banner {
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-areas:
                'first second third';
        }
        .third {
            grid-gap: unset;
        }
        .third > img.w-100 {
            max-width: unset;
        }
    }
    @media (min-width:1400px) {
        .featured-banner {
            grid-template-columns: 2fr 1fr 1fr 1fr;
        }
    }


</style>