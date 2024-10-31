<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {computed} from 'vue'
export default ({
    props: ['firstName', 'lastName', 'userName', 'age'],
    setup(props) {
        const fullName = computed(function {
            return props.firstName + props.lastName;
        })
    }
})
</script>
