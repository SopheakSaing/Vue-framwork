<script>
export default {
  data() {
    return {
      name: 'meisme sofie',
      status: 'active',
      link: 'https://github.com',
    }
  },
  methods: {
    onToggleStatus() {
      if (this.status === 'active') {
      this.staus = 'pending'
    } else if(this.status === 'pending') {
        this.staus = 'inactive'
    } else {
        this.status = 'inactdoneive';
      }
    }
  }
}
</script>

<template>

</template>
