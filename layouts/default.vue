<template>
  <div class="container">

    <div class="control-panel">
      <div class="control-panel__item" v-if="$auth.loggedIn" @click="logout">Пользователи</div>
      <div class="control-panel__item" v-if="$auth.loggedIn" @click="logout">Выйти</div>
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

  &__item {
    cursor: pointer;
  }
}
</style>
