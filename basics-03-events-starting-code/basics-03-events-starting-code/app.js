const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(num) {
      return (this.counter = this.counter + num);
    },
    decrement(num) {
      return (this.counter = this.counter - num);
    },
  },
});

app.mount("#events");
