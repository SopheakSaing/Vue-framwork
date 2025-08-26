<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = 'Jonh Doe';
    const status = ref('active');
    const tasks = ref(['Task one', 'Task two', 'Task three', 'Task four', 'Task five']);
    const newTask = ref('wwwwwwksksks');

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending'
      } else if(status.value === 'pending') {
        status.value = 'inactive'
      } else {
        status.value = 'done';
      }
    }

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    }

    return {
      name, status, tasks, toggleStatus, addTask, newTask,
    }
  }
}
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status==='active'">User is active</p>
  <p v-else-if="status==='pending'">User is pending</p>
  <p v-else> User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input id="newTask" v-model="newTask" name="newTask" type="text"/>
    <button type="submit">
    Submit
    </button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <br/>
  <button @click="toggleStatus">Change Status</button>

</template>
