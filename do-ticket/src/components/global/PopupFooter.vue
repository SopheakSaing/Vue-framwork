<script>
export const PopUpFooter = () => ({
    props: {
        showBackButton: { type: Boolean, default: true },
        confirmButtonTitle: String,
        backButtonTitle: String,
        enableConfirmButton: Boolean,
        enableBackButton: { type: Boolean, default: true },
        isBorderTop: { type: Boolean, required: false },
        cssFooter: { type: String, required: false, default: '' },
        isBackCircle: { type: Boolean, default: true },
        isSubmitting: { type: Boolean },
        cssConfirmButton: { type: String, required: false, default: '' },
        cssBackButton: { type: String, required: false, default: '' },
        showBackButtonAtBottom: { type: Boolean }
    },
    computed: {
        cssStyleFooter: function() {
            let style = (this.backButtonTitle && this.isBackCircle) ? this.cssFooter + ' justify-content-between' : this.cssFooter + ' justify-content-end';
            if (this.isBorderTop) {
                style += ' ' + 'cec-popup__footer';
            }
            return style;
        }
    },
    template: `
        <div class="d-sm-flex" :class="cssStyleFooter">
            <div :class="{ 'd-none d-sm-block' : showBackButtonAtBottom }">
                <cw-button-link
                    css-wrapper="align-items-center"
                    :label="translate(backButtonTitle)"
                    @action="$emit('on-back')"
                    icon-name="back-circle"
                    v-if="backButtonTitle && isBackCircle && showBackButton"
                ></cw-button-link>
                <cw-button
                    :label="translate(backButtonTitle)"
                    style-type="default btn-cancel xs-down--width-100 mr-2 cec-mb-sm-0 mb-2"
                    :disabled="!enableBackButton"
                    @action="$emit('on-back')"
                    v-else-if="backButtonTitle && !isBackCircle"
                ></cw-button>
            </div>
            <div>
                <cw-button
                    :disabled="!enableConfirmButton || isSubmitting"
                    :label="translate(confirmButtonTitle)"
                    :style-type="'primary xs-down--width-100 ' + cssConfirmButton"
                    @action="$emit('on-confirm')"
                >
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                </cw-button>
                <cw-button-link
                    v-if="showBackButtonAtBottom && backButtonTitle && isBackCircle"
                    css-wrapper="d-flex d-sm-none justify-content-center align-items-center cec-mt-6"
                    :label="translate(backButtonTitle)"
                    @action="$emit('on-back')"
                    icon-name="back-circle"
                ></cw-button-link>
            </div>
        </div>
    `
});
</script>
