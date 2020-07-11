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
      <!-- <router-link v-popover:popover1 class="navbar-brand brand-name" to="/">
        Urban Court
      </router-link> -->
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="currentRoute === 'signup' ? '/login' : '/signup'"
        >
          <i class="now-ui-icons users_circle-08"></i>
          <p>{{ currentRoute == "signup" ? "Login" : "Sign Up" }}</p>
        </router-link>
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
