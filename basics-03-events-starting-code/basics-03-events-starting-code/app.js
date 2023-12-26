const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      confirmName: "",
      fullname: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0; //this not work to counter that is outside setTimeout func,
        }, 1000);
      }
    },

    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    outputFullname() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
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
