const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      // event.preventDefault(); //prevent default submission
      alert("Submitted!");
    },
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
