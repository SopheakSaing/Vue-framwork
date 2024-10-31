<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName', 'userName', 'age'],
  setup(props, context) {
    const fullName = computed(function () {
      return props.firstName + props.lastName;
    });
    console.log(context)
    context.emit('save-data', 1);
    return { fullName };
  },
};
</script> 
