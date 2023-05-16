<template>
    <div class="container py-4 py-lg-45">
        <h1 class="text-center display-5 fw-normal mb-4 mb-lg-40">Sign In</h1>

        <div class="row justify-content-center">
            <div class="col-lg-6">
                <form>
                    <div class="form-item mb-3">
                        <AlertComp v-on:isVisible="alert.isVisible = $event " :type="alert.type" :title="alert.title"
                            :desc="alert.desc" :isVisible="alert.isVisible"></AlertComp>
                    </div>
                    <div class="form-item position-relative mb-3">
                       
                        <i class="las la-user"></i>
                        <input type="text" class="form-control form-control-lg rounded-2" placeholder="Username"
                            v-model.trim="username">
                    </div>
                    <div class="form-item position-relative mb-5">
                        <i class="las la-lock"></i>
                        <input type="text" class="form-control form-control-lg rounded-2" placeholder="Password"
                            v-model.trim="password">
                        <span class="js-show-type">
                            <i class="las la-eye"></i>
                        </span>
                    </div>
                    <div
                        class="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start justify-content-between">
                        <a href="#forgotPassword" class="text-decoration-underline mb-3 mb-sm-0"
                            data-bs-toggle="collapse">Forgot Password</a>
                        <button type="button" class="btn btn-green px-30 py-2 text-white w-100 w-sm-auto"
                            v-on:click="login">Sign In</button>
                    </div>
                    <div class="collapse" id="forgotPassword">
                        <div class="form-item position-relative my-4">
                            <i class="las la-envelope"></i>
                            <input type="text" class="form-control form-control-lg rounded-2" placeholder="E-mail">
                        </div>
                        <button class="btn btn-green px-30 py-2 text-white w-100 w-sm-auto d-lg-block ms-lg-auto">Send</button>
                    </div>
                </form>
                <div class="mt-5 pt-lg-5 w-50 mx-auto text-center">
                    <RouterLink to="/register" class="btn btn-zest text-white d-block py-12">Sign Up</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AlertComp from '../components/AlertComp.vue';
import { useUser } from '../stores/user';

export default {
    setup() {
        const user = useUser();

        return {user}
    },
    data() {
        return {
            username: "",
            password: "",
            alert: {
                type: '',
                title: '',
                desc: '',
                isVisible: false
            }

        }
    },
    methods: {
        async login(e) {
            var oldText = e.target.innerText;
            e.target.innerHTML = `<span class="spinner-border spinner-border-sm"></span>`;
            e.target.classList.add('disabled');
            this.alert.isVisible = false;

            if (this.username == '' || this.password == '') {
                this.alert.type = 'alert-warning';
                this.alert.title = 'Warning';
                this.alert.desc = 'Username or Password cannot null';
                this.alert.isVisible = true;
            }
            else if (this.username == 'test' && this.password == 'test') {
                this.alert.type = 'alert-success';
                this.alert.title = 'Success';
                this.alert.desc = 'Logged in successfully test@test.com';
                this.alert.isVisible = true;

                this.user.email = 'test@test.com';
                this.user.userName = 'test';
                this.user.userLogged = true;

                sessionStorage.setItem("userLogged", true);
                sessionStorage.setItem("userName", 'test');
                sessionStorage.setItem("email",'test@test.com');

                setTimeout(() => {
                    this.$router.push('/')
                    },2000);
            
            } else {

                let response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password,
                    })
                });

                let json = await response.json();
                
                if (json['message'] == 'Invalid credentials') {
                    this.alert.type = 'alert-danger';
                    this.alert.title = 'Error';
                    this.alert.desc = 'Username or Password invalid!';
                    this.alert.isVisible = true;
                }
                else if (json['token'] != '') {
                    this.alert.type = 'alert-success';
                    this.alert.title = 'Success';
                    this.alert.desc = 'Logged in successfully '+ json['email'];
                    this.alert.isVisible = true;

                    this.user.email = json['email'];
                    this.user.userName = json['username'];
                    this.user.userLogged = true;

                    sessionStorage.setItem("userLogged", true);
                    sessionStorage.setItem("userName", json['username']);
                    sessionStorage.setItem("email",json['email']);

                    setTimeout(() => {
                        this.$router.push('/')
                    },2000);
                }
            }
            e.target.innerHTML = oldText;
            e.target.classList.remove('disabled');

        }
    },
    components: {
        AlertComp
    }

}
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