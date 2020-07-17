<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img1/court.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img1/user.png" alt="" />
        </div>
        <h3 class="title">{{ userProfile.fullname }}</h3>
        <p class="category">{{ userProfile.email }}</p>
        <div class="content">
          <div class="social-description pull-left">
            <p>Phone number</p>
            <h2>{{ userProfile.phoneNumber }}</h2>
          </div>

          <div class="social-description pull-right">
            <p>Date of Birth</p>
            <h2 class="date">{{ userProfile.dateOfBirth }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a href="#button" class="btn btn-primary btn-round btn-lg"
            >Show my QR code</a
          >
        </div>
        <h3 class="title">About me</h3>
        <h5 class="description">
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from "@/components";
import { mapState } from "vuex";

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    Tabs,
    TabPane,
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.user.userProfile,
    }),
  },
};
</script>
<style lang="scss" scoped>
.date {
  width: max-content;
}
</style>
