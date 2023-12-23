const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    // setName(event) {
    //   this.name = event.target.value;
    // },
    setName(event, surname) {
      //get event from browser
      this.name = event.target.value + " " + surname;
    },
    increment(num) {
      return (this.counter = this.counter + num);
    },
    decrement(num) {
      return (this.counter = this.counter - num);
    },
  },
});

app.mount("#events");
