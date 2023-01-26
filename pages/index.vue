<template>
  <div>
    index page
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'is-admin'],
  components: {},
  props: {},
  data: () => ({}),
  methods: {},
}
</script>
