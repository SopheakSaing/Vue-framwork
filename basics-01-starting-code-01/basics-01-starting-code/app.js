const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and can apply to real project!",
      vueLink: 'https://vuejs.org/'
    };
  },
});

app.mount("#user-goal");
