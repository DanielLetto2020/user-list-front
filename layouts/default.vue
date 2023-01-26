<template>
  <div class="container">

    <div class="control-panel">
      <div>
        <nuxt-link to="/" class="control-panel__item" active-class="mr-3">Главная</nuxt-link>
        <nuxt-link to="/users" class="control-panel__item">Пользователи</nuxt-link>
      </div>
      <div class="d-flex">
        <div class="mr-3 text-secondary">{{ $auth.user.email}}</div>
        <div class="control-panel__item" v-if="$auth.loggedIn" @click="logout">Выйти</div>
      </div>
    </div>

    <nuxt/>

  </div>
</template>

<script>


export default {
  name: "default",
  components: {},
  props: {},
  data: () => ({}),
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style scoped lang="scss">
.control-panel {
  border: 1px solid grey;
  background-color: #07052a;
  color: white;
  border-radius: 0 0 10px 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 30px auto;
  box-shadow: 0px 7px 29px -2px rgba(34, 60, 80, 0.43);

  &__item {
    cursor: pointer;
  }

  a {
    color: white;
  }
}
</style>
