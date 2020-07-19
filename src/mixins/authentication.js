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
        afterSuccessfulAuth() {
            this.$router.push({ path: "/profile" });
        },
        showErrorMessage(message) {
            this.errorMsg = message;
            this.modals.classic = true;
        },
        blockForm(value) {
            this.isFormSubmitted = value;
        },
    },
}