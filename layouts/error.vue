<template>
  <div class="_ErrorPage container text-center">
    <div class="statusCode">{{ error.statusCode }}</div>

    <p class="txt-weight-bold mb-5">{{ errorTitle }}</p>

    <nuxt-link to="/">на главную</nuxt-link>

  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  asyncData() {
  },
  computed: {
    errorTitle() {
      if (this.error.statusCode === 404) {
        return 'Такой страницы не существует!'
      } else if (this.error.statusCode === 403) {
        return 'Доступ к разделу запрещён'
      } else if (this.error.statusCode === 500) {
        return 'Что то пошло не так на сервере.'
      }
      return '';
    }
  },
}
</script>

<style scoped lang="scss">
._ErrorPage {
  a {
    margin: 0 20px;
    font-weight: bold;
    color: #47494e;
    text-decoration: none;
  }

  .statusCode {
    font-size: 165px;
  }
}
</style>
