<template>
  <div>

    <template v-if="users.length === 0">Загружаем пользователей ...</template>

    <template v-if="users.length > 0">
      <pre>{{ users }}</pre>
    </template>

  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  components: {},
  props: {},
  data: () => ({
    users: []
  }),
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.$axios.get('/users').then(({data}) => {
        this.users = data.data
      })
    }
  },
}
</script>
