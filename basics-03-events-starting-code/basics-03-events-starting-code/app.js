const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      return this.counter++;
    },
    decrement() {
      return this.counter--;
    },
  },
});

app.mount("#events");
