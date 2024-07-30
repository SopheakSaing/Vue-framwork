<script>
const PopupContainer = {
    props: {
        cssFooterWrapper: { type: String, default: 'justify-content-end' },
        cssBodyWrapper: { type: String, default: 'justify-content-end' },
        cssHeaderWrapper: { type: String, default: 'justify-content-end' },
        cssPopupWrapper: { type: [String, Array, Object], default: '' },
        hideFooter: { type: Boolean }
    },
    template: `
        <div class="cec-popup position-relative mw-100 border" :class="cssPopupWrapper" role="dialog">
            <div class="cec-popup__header d-flex" :class="cssHeaderWrapper">
                <slot name="header"></slot>
            </div>
            <div class="cec-popup__body" :class="cssBodyWrapper">
                <slot name="body"></slot>
            </div>
            <div v-if="!hideFooter" class="cec-popup__footer" :class="cssFooterWrapper ? 'd-sm-flex ' + cssFooterWrapper : ''">
                <slot name="footer"></slot>
            </div>
        </div>
    `
};


export { PopupContainer }
</script>