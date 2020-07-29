<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img1/court.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <modal
          :show.sync="modals.classic"
          class="modal-primary"
          :show-close="false"
          header-classes="justify-content-center"
          footer-classes="justify-content-center"
          type="mini"
        >
          <div slot="header">
            <h3>Oops</h3>
          </div>
          <p>{{ errorMsg }}</p>
          <template slot="footer">
            <n-button type="neutral" link @click.native="modals.classic = false"
              >Close</n-button
            >
          </template>
        </modal>
        <ValidationObserver v-slot="{ invalid }">
          <div class="col-md-8 col-12 ml-auto mr-auto">
            <card type="login" plain>
              <div slot="header" class="mt-5">
                <h1>Login</h1>
              </div>

              <fg-input
                v-model="signupForm.email"
                class="no-border input-lg"
                addon-left-icon="now-ui-icons ui-1_email-85"
                placeholder="Email..."
                name="Email"
                id="email"
                rules="required|email"
              >
              </fg-input>

              <fg-input
                v-model="signupForm.password"
                class="no-border input-lg"
                type="password"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Password..."
                name="Password"
                id="password"
                rules="required|min:6"
              >
              </fg-input>

              <template slot="raw-content">
                <div class="card-footer text-center">
                  <a
                    @click="login"
                    class="btn btn-primary btn-round btn-lg btn-block"
                    :class="[
                      {
                        disabled: invalid || isFormSubmitted,
                      },
                    ]"
                    ><i
                      v-if="isFormSubmitted"
                      class="now-ui-icons loader_refresh spin"
                    ></i
                    >{{ isFormSubmitted ? "" : "Login" }}</a
                  >
                </div>

                <div>
                  <h6>
                    <router-link
                      v-popover:popover1
                      class="link footer-link"
                      to="/signup"
                    >
                      Create an account</router-link
                    >
                  </h6>
                </div>
              </template>
            </card>
          </div>
        </ValidationObserver>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Modal } from "@/components";
import { ValidationObserver } from "vee-validate";
import MainFooter from "@/layout/MainFooter";
import autenticationMixin from "../mixins/authentication";
import { mapActions } from "vuex";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Modal,
    ValidationObserver,
  },
  mixins: [autenticationMixin],
  data() {
    return {
      signupForm: {
        email: "",
        password: "",
      },
      isFormValid: true,
      isFormSubmitted: false,
    };
  },
  methods: {
    ...mapActions({
      loginUser: "user/login",
    }),
    async login() {
      try {
        this.blockForm(true);
        await this.loginUser(this.signupForm);
        this.afterSuccessfulAuth();
      } catch (error) {
        this.showErrorMessage(error);
      }
    },
  },
};
</script>
<style></style>
