<script>
import { ref, onMounted } from 'vue';
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

    const deleteTask = (index) => {
      tasks.value.splice(index, 1)
    };

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map((task) => task.title)
      } catch (error) {
        console.log('Error fetching tasks');
      }
    });

    return {
      name, status, tasks, toggleStatus, addTask, newTask, deleteTask
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
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task"><span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <br/>
  <button @click="toggleStatus">Change Status</button>

</template>
