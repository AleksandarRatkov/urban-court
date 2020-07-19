<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <img class="navbar-img" src="img1/logo-header.png" alt="" />
    </template>
    <template slot="navbar-menu">
      <li class="nav-item" v-if="currentRoute !== 'profile'">
        <router-link
          class="nav-link"
          :to="currentRoute === 'login' ? '/signup' : '/login'"
        >
          <i class="now-ui-icons users_circle-08"></i>
          <p>{{ currentRoute == "login" ? "Sign Up" : "Login" }}</p>
        </router-link>
      </li>

      <li class="nav-item" v-if="currentRoute === 'profile'">
        <span class="nav-link" @click="logout">
          <i class="now-ui-icons media-1_button-power"></i>
          <p>Logout</p>
        </span>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/urbancourtNS/"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/urban.court/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import { mapMutations } from "vuex";
import { auth } from "../firebaseConfig";

export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapMutations({
      setCurrentId: "user/setCurrentUserId",
      setUserProfile: "user/setUserProfile",
    }),
    logout() {
      auth
        .signOut()
        .then(() => {
          this.setCurrentId(null);
          this.setUserProfile({});
          this.$router.push({
            path: "/",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.navbar-img {
  height: 55px;
}
.brand-name {
  padding-left: 20px;
}
</style>
