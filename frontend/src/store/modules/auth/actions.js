import {userService} from "../../../services"

export default {
      async loginUser(context,payload){
        const response = await userService.login(payload);

        if( (response.data.error !==undefined) || (response.data.errors !== undefined) ) {
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        }
        else {
            localStorage.setItem('token',response.data[0].token);
            window.location.reload();
            context.commit("setErrors", {
                error: ''
            });
            context.commit("setToken", {
                token: response.data[0].token
            })
        }
    },
    async registerUser(context,payload){
          const response = await userService.register(payload);
        if( (response.data.error !==undefined) || (response.data.errors !== undefined) ) {
            context.commit("setSuccess", {
                success: ''
            })
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        }
        else {
            context.commit("setErrors", {
                error: ''
            });
            context.commit("setSuccess", {
                success: response.data.message
            })
        }
    },
    async sendPasswordResetLink(context, payload){
          const response = await userService.resetPasswordLink(payload);
        if( (response.data.error !==undefined) || (response.data.errors !== undefined) ) {
            context.commit("setSuccess", {
                success: ''
            })
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        }
        else {
            context.commit("setErrors", {
                error: ''
            });
            context.commit("setSuccess", {
                success: response.data.message
            })
        }
    },
    async updatePassword(context, payload){
          const response = await userService.updatePassword(payload);

        if( (response.data.error !==undefined) || (response.data.errors !== undefined) ) {
            context.commit("setSuccess", {
                success: ''
            })
            context.commit("setErrors", {
                error: response.data.error || response.data.errors
            })
        }
        else {
            context.commit("setErrors", {
                error: ''
            });
            context.commit("setSuccess", {
                success: response.data.message
            })
        }
    }

}