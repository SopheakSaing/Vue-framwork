<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   phoneNumber: {
  //     type: String,
  //     required: true,
  //   },
  //   emailAddress: {
  //     type: String,
  //     required: true,
  //   },
  //   isFavorite: {
  //     type: Boolean,
  //     required: false,
  //     default: false,
  //     // validator: function (value) {
  //     //   return value === "1" || value === "0";
  //     // },
  //   },
  // },
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>