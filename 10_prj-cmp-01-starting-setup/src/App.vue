<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>
<script>
// import LearningResource from './components/learning-resources/LearningResource.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: [TheHeader],
  data() {
    return {
      storedResources: [
        {
          id: 'official',
          title: 'office guid',
          description: 'loremabc',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'google',
          description: 'loremabcde',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>