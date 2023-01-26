<template>
  <div class="register-page">

    <div class="content">
      <b-form>

        <b-input-group prepend="Имя" class="mb-2 pb-4 mr-sm-2 mb-sm-0">
          <b-form-input type="text" placeholder="Имя" v-model="authData.name"/>
        </b-input-group>

        <b-input-group prepend="Почта" class="mb-2 pb-4 mr-sm-2 mb-sm-0">
          <b-form-input type="email" placeholder="Почта" v-model="authData.email"/>
        </b-input-group>

        <b-input-group prepend="Телефон" class="mb-2 pb-4 mr-sm-2 mb-sm-0">
          <b-form-input type="text" placeholder="Телефон" v-model="authData.phone"/>
        </b-input-group>

        <b-input-group prepend="Пароль" class="mb-2 pb-4 mr-sm-2 mb-sm-0">
          <b-form-input type="password" placeholder="Пароль" v-model="authData.password"/>
        </b-input-group>

        <b-button variant="primary" @click="singUp">Регистрация</b-button>
      </b-form>

      <div class="text-center mt-3">
        <nuxt-link to="/login">Вход</nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "register",
  layout: 'auth',
  components: {},
  props: {},
  data: () => ({
    authData: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
  }),
  methods: {
    async singUp() {
      try {
        await this.$auth.loginWith('registerAuth', {
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
  },
}
</script>

<style scoped lang="scss">
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
