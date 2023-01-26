<template>
  <div>

    <h2>Информация о пользователе</h2>
    <div v-for="field in Object.keys(user)" class="">
      <div>{{ field }}: {{ user[field] }}</div>
    </div>

    <template v-if="payments.length > 0">
      <h2 class="mt-3">Платежи</h2>
      <b-table striped hover :items="payments" :fields="fields" />
    </template>
  </div>
</template>

<script>


export default {
  name: "payments",
  components: {},
  props: {},
  data: () => ({
    user: {},
    fields: [
      {
        key: 'id',
        sortable: true,
      },
      {
        key: 'amount',
        sortable: true,
        label: 'Сумма',
      },
      {
        key: 'status',
        sortable: true,
        label: 'Статус',
      },
      {
        key: 'createdAtText',
        sortable: true,
        label: 'Дата создания',
      },
    ],
    payments: []
  }),
  created() {
    this.fetchUser()
    this.fetchUserPayments()
  },
  methods: {
    fetchUser() {
      this.$axios.get(`/users/${this.$route.params.userId}`).then(({data}) => {
        this.user = data.data
      })
    },
    fetchUserPayments() {
      this.$axios.get(`/users/${this.$route.params.userId}/payments`).then(({data}) => {
        this.payments = data.data
      })
    },
  },
}
</script>

<style scoped lang="scss">

</style>
