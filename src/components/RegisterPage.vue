<template>
    <div class="container py-4 py-lg-45">
        <h1 class="text-center display-5 fw-normal mb-4 mb-lg-40">Register</h1>
        
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <ul class="nav nav-tabs border-green" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active border-green border-bottom-0 text-green py-12 pe-none" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Individual</button>
                    </li>
                </ul>
                <div class="tab-content pt-5" id="myTabContent">
                    <form>
                        <div class="form-item position-relative mb-3">
                            <i class="las la-user"></i>
                            <input type="text" class="form-control form-control-lg rounded-2" placeholder="Your Name">
                        </div>
                        <div class="form-item position-relative mb-3">
                            <i class="las la-envelope"></i>
                            <input type="text" class="form-control form-control-lg rounded-2" placeholder="E-Mail">
                        </div>
                        <div class="form-item position-relative mb-4">
                            <i class="las la-lock"></i>
                            <input type="text" class="form-control form-control-lg rounded-2" placeholder="Password">
                            <span class="js-show-type">
                                <i class="las la-eye"></i>
                            </span>
                        </div>
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                            <label class="form-check-label" for="flexCheckChecked">
                                I’d like to receive information about similar products, special offers, and promotions from Mizu. (Remember, you can opt-out at any time.)
                            </label>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-green px-30 py-2 text-white w-100 w-sm-auto">Sign Up</button>
                        </div>                            
                        
                    </form>
                    <div class="mt-5 w-50 mx-auto text-center">
                        <h4 class="mb-3">Are you already a registered user?</h4>
                        <RouterLink to="/login" class="btn btn-zest text-white d-block py-12">Sign In</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .form-item > i {
        font-size:32px;
        position: absolute;
        top: 11px;
        left: 17px;
        color:#51b549;
    }
    .form-item input{
        border:2px solid #edf1f2;
        font-size: 1.25rem;
        height: 55px;
        padding: 0 20px 0 60px;
    }
    input::placeholder {
        color:#ccc;
    }
    input:focus {
        border-color:#cfdadd;
    }
    .js-show-type {
        font-size:22px;
        position: absolute;
        top: 12px;
        right: 13px;
    }
</style>