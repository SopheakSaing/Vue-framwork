<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.key"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>
<script>
import LearningResource from './components/learning-resource/LearningResource.vue';
export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js docs',
          link: 'https://vuejs/org',
        },
        {
          id: 'nearly official-guide',
          title: 'ABC Guide',
          description: 'The official react.js docs',
          link: 'https://reactjs/org',
        },
      ],
    };
  },
};
</script>
