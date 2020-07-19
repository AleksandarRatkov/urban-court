import { mapMutations } from "vuex";

export default {
    data() {
        return {
            errorMsg: "",
            isFormSubmitted: false,
            modals: {
                classic: false,
                verify: false
            }
        }
    },
    methods: {
        ...mapMutations({
            setCurrentId: "user/setCurrentUserId",
        }),
        afterSuccessfulAuth() {
            this.$router.push({ path: "/profile" });
        },
        showErrorMessage(message) {
            this.errorMsg = message;
            this.modals.classic = true;
            this.blockForm(false);
        },
        blockForm(value) {
            this.isFormSubmitted = value;
        },
    },
}