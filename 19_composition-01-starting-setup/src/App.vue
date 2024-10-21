<template>
    <section class="container">
        <h2>{{ fullName }}</h2>
        <h2>{{ age }}</h2>
        <button @click="setNewAge()">Change Age</button>
        <div>
            <input type="text" placeholder="First Name" v-model="firstName">
            <input type="text" placeholder="Last Name" v-model="lastName">
        </div>
    </section>
</template>

<script>
import { ref, computed } from 'vue'
export default {
    setup() {
        // const userName = ref('Meisme Alpha test')
        // const userAge = ref(20)
        const firstName = ref('');
        const lastName = ref('')
        const age = ref(31);

        
        function setNewAge() {
            age.value = ref('32')
        }

        computed(function() {
            return firstName.value + ' ' + lastName.value
        });

        // function setFirstName(event) {
        //     firstName.value = event.target.value;
        // }

        
        // function setLastName(event) {
        //     lastName.value = event.target.value;
        // }


        
        const fullName = computed(function()  {
            return firstName.value + ' ' + lastName.value
        });

        return { age, fullName, setNewAge, firstName, lastName} //not executing the func() but storing its pointer
    }
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