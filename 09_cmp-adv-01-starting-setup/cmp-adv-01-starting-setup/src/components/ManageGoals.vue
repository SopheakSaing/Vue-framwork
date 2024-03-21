<!-- user can add new course goals -->
<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoals">Set Goals</button>
  <error-alert-modal v-if="inputIsInvalid">
    <h2>Input is Invalid</h2>
    <p>Plz enter more characters!</p>
    <button @click="confirmError()">Okeh</button>
  </error-alert-modal>
</template>
<script>
import ErrorAlertModal from "./ErrorAlertModal.vue";

export default {
  components: {
    ErrorAlertModal,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoals() {
      const enteredvalue = this.$refs.goal.value;
      if (enteredvalue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>