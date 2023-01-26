<template>
  <div>
    login page
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
    error: null,
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

            // if (this.$auth.user.isChangePassword) {
            //   this.$router.push('/settings')
            // }else{
            // this.$router.push('/')
            // }
            // if (this.$auth.hasScope('MANAGER')) {
            //   this.$router.push('/manager/content')
            // } else if (this.$auth.hasScope('USER')) {
            //   this.$router.push('/account')
            // }

          })
          .catch(({response}) => {
            //console.log('--- catch manager onSubmit')
            //console.log(response);
          });
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  }
}
</script>

<style scoped lang="scss">

</style>
