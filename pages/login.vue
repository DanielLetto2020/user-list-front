<template>
  <div class="login-page">

   <div  class="content">
     <b-form inline>
       <label class="sr-only" for="inline-form-input-username">Username</label>
       <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
         <b-form-input type="email" placeholder="Почта" v-model="authData.email"/>
       </b-input-group>

       <label class="sr-only" for="inline-form-input-name">Name</label>
       <b-input-group prepend="P" class="mb-2 mr-sm-2 mb-sm-0">
         <b-form-input type="password" placeholder="Пароль" v-model="authData.password"/>
       </b-input-group>

       <b-button variant="primary" @click="singIn">Вход</b-button>
     </b-form>

     <div class="text-center mt-3">
       <nuxt-link to="/register">Регистрация</nuxt-link>
     </div>
   </div>

  </div>
</template>

<script>
export default {
  name: "login",
  layout: 'auth',
  middleware: 'guest',
  components: {},
  props: {},
  data: () => ({
    authData: {
      email: '',
      password: '',
    },
  }),
  methods: {
    async singIn() {
      try {
        await this.$auth.loginWith('localAuth', {
          data: {
            ...this.authData,
          }
        })
          .then((res) => {
            // this.$router.push('/')
            console.log(res)
          })
          .catch(e => false);
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  }
}
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
