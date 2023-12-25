const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      confirmName: "",
    };
  },
  computed: {
    outputFullname() {
      console.log("Running again...");
      if (this.name == "") {
        return "";
      }
      return this.name + " " + "Saing";
    },
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
    setName(event) {
      //get event from browser
      this.name = event.target.value;
    },
    increment(num) {
      return (this.counter = this.counter + num);
    },
    decrement(num) {
      return (this.counter = this.counter - num);
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
