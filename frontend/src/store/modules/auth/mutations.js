export default {
    setToken (state, payload){
        state.token = payload.token
    },
    setErrors(state, payload){
        state.error = payload.error;
    },
    setSuccess(state,payload){
        state.success=  payload.success
    }
}