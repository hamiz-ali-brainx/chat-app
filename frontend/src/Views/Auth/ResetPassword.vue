<template>
  <div class="container-fluid">
    <div class="row justify-content-center ">
      <AuthView/>
      <div class="col-lg-6  col-md-12 col-sm-12">
        <div class="container login-form">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h2 class="fw-bolder fs-3">Reset Password</h2>
              <h6 class="text-black-50"> LogIn your account?
                <span>
                <router-link to="../Login" class="ps-4 link-primary text-decoration-none">
                  Sign in
                </router-link>
              </span>
              </h6>
              <form>
                <div class="input-group-lg mb-3">
                  <label class="control-label" for="password">Password</label>
                  <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
                  <span class="text-danger" v-if="getError.password">{{getError.password[0]}}</span>

                </div>
                <div class="input-group-lg mb-3">
                  <label class="control-label" for="confirm_password">Confirm Password</label>
                  <input type="password" class="form-control" v-model="password_confirmation" id="confirm_password" placeholder="Confirm Password">
                  <span class="text-danger" v-if="getError.password_confirmation">{{getError.password_confirmation[0]}}</span>

                  <span class="text-danger" v-if="getError && !getError.password && !getError.password_confirmation">{{getError}}</span>
                </div>
                <div class="form-group">
                  <button @click="changePassword" class="btn w-100 btn-info bg-primary text-white rounded-2">Reset Password</button>
                </div>
              </form>
            </div>
            <div class="text-success" v-if="getSuccess">
              {{getSuccess}}
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
const store = useStore();
const props = defineProps(["token"]);
const password = ref("");
const password_confirmation = ref("");
const getError = computed(() => {
  return store.state.auth.error
});
const getSuccess = computed(()=>{
  return store.state.auth.success
})

async function changePassword(e){
  e.preventDefault();
  await store.dispatch("auth/updatePassword",{
    token: props.token,
    password: password.value,
    password_confirmation: password_confirmation.value
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