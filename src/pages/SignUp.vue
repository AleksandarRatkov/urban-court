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
              <div slot="header" class="sign-up">
                <h1>Sign Up</h1>
              </div>

              <fg-input
                v-model="signupForm.fullname"
                class="no-border input-lg"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Full Name..."
                name="Fullname"
                id="fullname"
                rules="required|min:6"
              >
              </fg-input>

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
                v-model="signupForm.phoneNumber"
                class="no-border input-lg"
                addon-left-icon="now-ui-icons tech_mobile"
                placeholder="Phone number"
                name="Phone number"
                id="phoneNumber"
                rules="required|numeric|min:8|max:10"
              >
              </fg-input>
              <fg-input
                class="no-border input-lg picker"
                name="Date of Birth"
                rules="required"
              >
                <el-date-picker
                  v-model="signupForm.dateOfBirth"
                  popper-class="date-picker-primary"
                  type="date"
                  placeholder="Select date"
                >
                </el-date-picker>
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
              <fg-input
                v-model="signupForm.repeatPassword"
                class="no-border input-lg"
                type="password"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Repeat password..."
                name="Repeat password"
                id="repeatPassword"
                rules="required|min:6"
                :error="matchingPasswords"
              >
              </fg-input>
              <div>
                <n-checkbox v-model="signupForm.agreedWithTerms">
                  I agree to the terms and conditions.
                </n-checkbox>
              </div>
              <template slot="raw-content">
                <div class="card-footer text-center">
                  <a
                    class="btn btn-primary btn-round btn-lg btn-block"
                    @click="signup"
                    :class="[
                      {
                        disabled:
                          invalid ||
                          !signupForm.agreedWithTerms ||
                          matchingPasswords.length > 0 ||
                          isFormSubmitted,
                      },
                    ]"
                    >Sign Up</a
                  >
                </div>

                <div>
                  <h6>
                    <router-link
                      v-popover:popover1
                      class="link footer-link"
                      to="/login"
                    >
                      Already have account?
                    </router-link>
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
import { Card, Button, FormGroupInput, Checkbox, Modal } from "@/components";
import autenticationMixin from "../mixins/authentication";
import { DatePicker } from "element-ui";
import MainFooter from "@/layout/MainFooter";
import { ValidationObserver } from "vee-validate";
import { mapActions } from "vuex";
import moment from "moment";

export default {
  name: "signup-page",
  bodyClass: "login-page",
  mixins: [autenticationMixin],
  components: {
    Card,
    MainFooter,
    Modal,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    ValidationObserver,
    [DatePicker.name]: DatePicker,
  },
  data() {
    return {
      signupForm: {
        fullName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        password: "",
        repeatPassword: "",
        agreedWithTerms: false,
      },
    };
  },
  computed: {
    matchingPasswords() {
      if (this.signupForm.repeatPassword) {
        return this.signupForm.password === this.signupForm.repeatPassword
          ? ""
          : "Passwords a`re not identical";
      }
    },
    // isUserOver18() {
    //   const timeDiff = moment(this.signupForm.dateOfBirth, "DD-MM-YYYY").diff(
    //     moment()
    //   );
    //   console.log(Math.abs(moment.duration(timeDiff).years()) >= 18);
    //   return moment.duration(timeDiff).years();
    // },
  },
  methods: {
    ...mapActions({
      signUpUser: "user/signup",
    }),
    async signup() {
      this.blockForm(true);
      try {
        this.formatDateOfBirth();
        await this.signUpUser(this.signupForm);
        this.afterSuccessfulAuth();
      } catch (error) {
        this.blockForm(false);
        this.showErrorMessage(error);
      }
    },
    formatDateOfBirth() {
      this.signupForm.dateOfBirth = moment(this.signupForm.dateOfBirth).format(
        "DD-MM-YYYY"
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 820px) {
  .sign-up {
    margin-top: 3rem !important;
  }
}
.picker {
  margin-bottom: 55px;
}
</style>
