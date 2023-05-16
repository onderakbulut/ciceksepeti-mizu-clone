<template>
    <footer class="footer bg-porcelain pt-5 py-lg-40">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-xl-4">
                    <div class="text-center">
                        <p class="fs-20">Download the Mizu App for Free</p>
                        <div class="d-flex justify-content-center mb-5">
                            <div class="d-flex flex-wrap justify-content-center flex-lg-column border-lg-end pe-lg-4 gap-2 gap-lg-0">
                                <img width="135" height="40" src="../assets/images/google-store-en.png" alt="" class="mb-lg-2">
                                <img width="135" height="40" src="../assets/images/apple-store-en.png" alt="" class="mb-lg-2">
                                <img width="135" height="40" src="../assets/images/huawei-store-en.png" alt="">
                            </div>
                            <div class="d-none d-lg-flex align-items-center ps-lg-4">
                                <img src="../assets/images/qrcode-lola-new.png" alt="" width="80" height="80">
                                <p class="p-10 fs-14 mb-0">Download <br> Mizu App with <br> QR code</p>
                            </div>
                        </div>
                        <ul class="list-inline social mb-4">
                            <li class="list-inline-item"><a href="#"><i class="lab la-facebook-f"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="lab la-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="lab la-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="las la-pen"></i></a></li>
                        </ul>
                    </div>
                    <div class="row footer-collapse" id="accFooter">
                        <div class="col-lg-6">
                            <a href="#linklist1" class="title mb-2 text-decoration-none h6 d-flex align-items-center justify-content-between justify-content-lg-center link-title collapsed" data-bs-toggle="collapse" aria-expanded="false">
                                HELP
                                <span class="right-arrow d-lg-none rounded-8"><i class="las la-angle-down"></i></span>
                            </a>
                            <div class="collapse text-lg-center" id="linklist1" data-bs-parent="#accFooter" style="">
                                <ul class="list-unstyled footerLink">
                                    <li><a href="#"> Contact Us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Mindful Marketing Movement</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <a href="#linklist2" class="title mb-2 text-decoration-none h6 d-flex align-items-center justify-content-between justify-content-lg-center link-title collapsed" data-bs-toggle="collapse" aria-expanded="false">
                                LEGAL
                                <span class="right-arrow d-lg-none rounded-8"><i class="las la-angle-down"></i></span>
                            </a>
                            <div class="collapse text-lg-center" id="linklist2" data-bs-parent="#accFooter" style="">
                                <ul class="list-unstyled footerLink">
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Privacy Policy - GDPR</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                    <li><a href="#">Delivery Policy</a></li>
                                    <li><a href="#">Cancellation Policy</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                    <li><a href="#">Legal Notice</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .border-lg-end {
        border-color:#c0c5c6!important;
    }
    .social > li > a {
        width:32px;
        height:32px;
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius:50%;
        color:white;
        font-size:19px;
    }
    .social .list-inline-item:not(:last-child) {
        margin-right: 20px;
    }
    .social li:nth-of-type(1) > a {
        background-color: #366099;
    }
    .social li:nth-of-type(2) > a{
        background-color: #6cadde;
    }
    .social li:nth-of-type(3) > a{
        background-color: #3f729b;
    }
    .social li:nth-of-type(4) > a{
        background-color: #e37c33;
    }
    .right-arrow i {
        transition: transform 0.5s ease 0s;
    }
    [aria-expanded="true"] .right-arrow>i {
        transform: rotate(180deg);
    }
    .title {
        color:#185aa3;
    }
    @media (min-width:992px){
        [data-bs-toggle] {
            pointer-events: none;
        }
        .footer .collapse {
            display: block;
        }
    }
</style>