<template>
  <div>

    <b-button class="mb-4" variant="primary" @click="showModal = true">Добавить пользователя</b-button>

    <template v-if="users.length === 0">
      <div class="my-3">Загружаем пользователей ...</div>
    </template>

    <template v-if="users.length > 0">
      <b-table striped hover :items="users" :fields="fields">
        <template #cell(action)="data">
          <div class="d-flex">
            <nuxt-link class=" mr-3" :to="data.item.id + '/payments'">Подробнее</nuxt-link>
            <div class="action-user mr-3" @click="editUser(data.item)">Редактировать</div>
            <div class="action-user" @click="deleteUser(data.item)" v-if="data.item.id !== $auth.user.id">Удалить</div>
          </div>
        </template>
      </b-table>
    </template>

    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <div>
          <b-input-group prepend="Имя" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input type="text" placeholder="Имя" v-model="selectUser.name"/>
          </b-input-group>
          <b-input-group prepend="Почта" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input type="email" placeholder="Почта" v-model="selectUser.email"/>
          </b-input-group>
          <b-input-group prepend="Телефон" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input type="text" placeholder="Телефон" v-model="selectUser.phone"/>
          </b-input-group>
          <b-input-group
            prepend="Пароль"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-if="selectUser.id === undefined || (selectUser.id !== undefined && selectUser.id === $auth.user.id)">
            <b-form-input type="password" placeholder="Пароль" v-model="selectUser.password"/>
          </b-input-group>
        </div>
        <div>
          <b-button variant="primary" @click="closeModal">Закрыть</b-button>
          <b-button variant="success" @click="updateOrCreateUser">
            {{ selectUser.id === undefined ? 'создать' : 'Обновить' }}
          </b-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "users",
  middleware: ['auth'],
  components: {},
  props: {},
  data: () => ({
    showModal: false,
    selectUser: {},
    fields: [
      {
        key: 'name',
        sortable: true,
        label: 'Имя',
      },
      {
        key: 'email',
        sortable: true,
        label: 'Почта',
      },
      {
        key: 'phone',
        sortable: true,
        label: 'Телефон',
      },
      {
        key: 'payments',
        sortable: true,
        label: 'Кол-во платежей',
      },
      {
        key: 'action',
        label: 'Действие',
      },
    ],
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
    },
    editUser(user) {
      this.selectUser = user
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.selectUser = {}
    },
    updateOrCreateUser() {
      this.$axios.post('/users', {...this.selectUser}).then((resp) => {
        this.fetchUsers()
        this.showModal = false
      })
    },
    deleteUser(user) {
      this.$axios.delete('/users', {data: {id: user.id}}).then((resp) => {
        this.fetchUsers()
      })
    },
  },
}
</script>

<style scoped lang="scss">
.action-user {
  cursor: pointer;
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.63);
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    width: 40%;
    padding: 20px;
    background-color: white;
  }
}
</style>
