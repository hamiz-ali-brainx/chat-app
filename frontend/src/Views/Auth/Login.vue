<template>
  <div class="container-fluid">
    <div class="row justify-content-center ">
      <AuthView/>
      <div class="col-lg-6  col-md-12 col-sm-12">
        <div class="container login-form">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h2 class="fw-bolder fs-3">Sign In</h2>
              <h6 class="text-black-50"> Don't have an account?
                <span>
                <router-link to="Register" class="ps-4 link-primary text-decoration-none">
                  Sign Up
                </router-link>
              </span>
              </h6>
              <form>
                <div class="input-group-lg mb-3">
                  <label class="control-label" for="email">Email</label>
                  <input type="email" class="form-control" v-model="email" id="email" placeholder="Email">
                  <span class="text-danger" v-if="getError.email">{{getError.email[0]}}</span>
                </div>
                <div class="input-group-lg mb-3">
                  <label class="control-label" for="password">Password</label>
                  <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
                  <span class="text-danger" v-if="getError.password">{{getError.password[0]}}</span>
                  <span class="text-danger" v-if="getError && !getError.password && !getError.email">{{getError}}</span>
                  <span class="text-success" v-if="getSuccess">{{getSuccess}}</span>

                </div>
                <div class="form-group">
                  <button @click="login" class="btn w-100 btn-info bg-primary text-white rounded-2">Sign In</button>
                </div>
              </form>
              <div class="form-group">
                <button @click="forgotPassword" class="btn w-100 mt-2 btn-info bg-primary text-white rounded-2">Forgot Password?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import AuthView from '../../components/AuthLayout/AuthView.vue'
import {useStore} from "vuex";

const email = ref("");
const password = ref("");
const store = useStore();
const getError = computed(() => {
  return store.state.auth.error
});
const getSuccess = computed(()=>{
  return store.state.auth.success
})

async function login(e) {
  e.preventDefault();
  await store.dispatch("auth/loginUser", {
    email: email.value,
    password: password.value
  });
}
async function forgotPassword(e){
  e.preventDefault();
  await store.dispatch("auth/sendPasswordResetLink",{
    email: email.value
  })

}

onMounted(() => {
  store.commit("auth/setSuccess", {
    success: ''
  })
  store.commit("auth/setErrors", {
    error: ''
  })
});

</script>