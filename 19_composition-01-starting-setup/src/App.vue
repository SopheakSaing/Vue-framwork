<template>
  <section class="container">
    <user-data :user-name="userName"></user-data>
    <h2>{{ fullName }}</h2>
    <h2>{{ age }}</h2>
    <button @click="setNewAge()">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">setLastName</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';
import UserData from './components/UserData.vue'
export default {
  props: ['firstName', 'lastName'],
  components: {
    UserData
  },
  setup() {
    // const userName = ref('Meisme Alpha test')
    // const userAge = ref(20)
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const age = ref(31);

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    function setNewAge() {
      age.value = 32;
    }

    watch( [age, fullName], function (newValues, oldValues) {
      //whenever age changes, that the watch func execute
      console.log('Old age:' + oldValues[0]);
      console.log('New age:' + newValues[0]);
           console.log('Old name:' + oldValues[1]);
      console.log('New name:' + newValues[1]);
    });

    computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    // function setFirstName(event) {
    //     firstName.value = event.target.value;
    // }

    function setLastName() {
        lastName.value = lastNameInput.value.value //first value refer to ref(), 2nd value refer to property of el obj
    }

    return { age, fullName, setNewAge, firstName, lastName, lastNameInput, setLastName }; //not executing the func() but storing its pointer
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>