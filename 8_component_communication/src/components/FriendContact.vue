<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorie === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFav">Toggle Fav</button>
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
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorie: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      if (this.friendIsFavorie === "1") {
        this.friendIsFavorie = "0";
      } else {
        this.friendIsFavorie = "1";
      }
    },
  },
};
</script>