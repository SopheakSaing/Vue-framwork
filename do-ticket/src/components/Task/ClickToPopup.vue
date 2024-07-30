<template>
  <div>
    helloooo
    <div class="">
      <button @click="clickSetting">Click here</button>

      <popup-learning-management-update
        :is-showing="show"
        :classes="classes"
        ref="popupLearning"
      ></popup-learning-management-update>
    </div>
  </div>
</template>

<script>
import { PopupLearningManagementUpdate } from "./components/Task/PopupLearningManagementUpdate.vue";

export default {
  emits: ["add-contact"],
  components: {
    PopupLearningManagementUpdate: PopupLearningManagementUpdate(),
  },
  data() {
    return {
      show: false,
      classes: [
        {
          id: 1,
          name: "Introduction to UX Design",
          show: true,
          pinned: true,
          bannerUrl: "../learning_management_updates/classA.png",
        },
        {
          id: 2,
          name: "The Gospel of Luke",
          show: true,
          pinned: false,
          bannerUrl: "../learning_management_updates/classA.png",
        },
        {
          id: 3,
          name: "Saxophone Basics",
          show: false,
          pinned: false,
          bannerUrl: "../learning_management_updates/classA.png",
        },
      ],
    };
  },
  methods: {
    clickSetting() {
      this.show = !this.show;
    },
    closePopup() {
      this.show = false;
    },
  },
};
</script>