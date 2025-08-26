<script>
export default {
  data() {
    return {
      name: 'meisme sofie',
      status: 'active',
      tasks: ['task one', 'task two', 'task three'],
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
  <h1>{{name}}</h1>
  <p v-if="status==='active'">User is active</p>
  <p v-else-if="status==='pending'">User is pending</p>
  <p v-else> User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click for Google</a>
  <br/>
  <button @click="onToggleStatus">Change Status</button>
</template>
