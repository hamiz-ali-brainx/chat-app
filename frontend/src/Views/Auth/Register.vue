<template>
  <div class="container-fluid">
    <div class="row justify-content-center ">
      <AuthView/>
      <div class="col-lg-6  col-md-12 col-sm-12">
        <div class="container register-form">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h2 class="fw-bolder fs-3">Sign Up</h2>
              <h6 class="text-black-50"> Already have an account?
                <span>
                <router-link to = "Login" class="ps-4 link-primary text-decoration-none">
                  Sign In
                </router-link>
              </span>
              </h6>
              <form>
                <div class="input-group-lg mb-3">
                  <label class="control-label" for="name">Full Name</label>
                  <input type="text" class="form-control" id="name" v-model= "name" placeholder="Full Name">
                  <span class="text-danger" v-if="getError.name">{{getError.name[0]}}</span>
                </div>
                <div class="input-group-lg mb-3">
                  <label class="control-label" for="email">Email</label>
                  <input type="email" class="form-control" id="email" v-model = "email" placeholder="Email">
                  <span class="text-danger" v-if="getError.email">{{getError.email[0]}}</span>
                </div>
                <div class="input-group-lg mb-3">
                  <label class="control-label" for="password">Password</label>
                  <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
                  <span class="text-danger" v-if="getError.password">{{getError.password[0]}}</span>
                </div>
                <div class="form-group">
                  <input type="submit" @click = "register" class="btn w-100 btn-info bg-primary text-white rounded-2" value="Sign Up">
                </div>
                <div class="text-success" v-if="getSuccess">
                      {{getSuccess}}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import AuthView from '../../components/AuthLayout/AuthView.vue'
import {ref, computed, onMounted} from "vue";
import {useStore} from "vuex";
const store = useStore();
const name = ref("");
const email = ref("");
const password = ref("");
const getError = computed(()=>{
  return store.state.auth.error
})

const getSuccess = computed(()=>{
  return store.state.auth.success
})

async function register(e){
  e.preventDefault();
  await store.dispatch("auth/registerUser", {
    name: name.value,
    email: email.value,
    password: password.value
  });
}

onMounted(() => {
  store.commit("auth/setSuccess", {
    success: ''
  })
  store.commit("auth/setErrors", {
    success: ''
  })
});
</script>