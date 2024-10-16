<template>
    <section class="container">
        <h2>{{ user.name }}</h2>
        <h2>{{ user.age }}</h2>
        <button @click="setNewAge()">Change Age</button>
    </section>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
        // const userName = ref('Meisme Alpha test')
        // const userAge = ref(20)
        const user = reactive({
            name: 'Meisme Alpha',
            age: 20
        })

        setTimeout(() => {
            //===with ref()=========
            // userName.value = 'Pheak'
            // userAge.value = '19'
            //===with reactive()=====
            user.name = 'Pheak'
            user.age = 19
        }, 2000)

        function setNewAge() {
            user.age = 20
        }

        return { user, setNewAge } //not executing the func() but storing its pointer
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