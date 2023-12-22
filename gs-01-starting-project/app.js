Vue.createApp({
  data() {
    //an obj data
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoals() {
//   const enteredValue = inputEl.value; //the input has its value - vannila js
//   const listItemEl = document.createElement("li");  //to create el
//   listItemEl.textContent = enteredValue; //to enter value
//   listEl.appendChild(listItemEl); //append to listItemEl
//   inputEl.value = ""; //reset input to empty string again
// }

// buttonEl.addEventListener("click", addGoals);
