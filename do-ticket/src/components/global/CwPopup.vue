<template>
     <div class="cec-popup-wrapper">
            <div :class="{ 'cec-popup-container': isShowing }">
                <popup-container v-if="isShowing"
                    :css-popup-wrapper="cssPopupWrapper"
                    css-header-wrapper="justify-content-between align-items-center"
                    css-body-wrapper="cec-py-4"
                    css-footer-wrapper="">
                    <template #header>
                        <cw-text size="24" color="gray-darker" weight="lighter">
                            {{ config.title }}
                        </cw-text>
                        <cw-button-link
                            css-class="btn-close"
                            @action="onClose()"
                            icon-name="close"
                        ></cw-button-link>
                    </template>
                    <template #body>
                        <slot></slot>
                    </template>
                    <template #footer>
                        <pop-up-footer
                            v-if="showFooter"
                            :back-button-title="config.backButtonTitle"
                            :confirm-button-title="config.confirmButtonTitle"
                            :css-confirm-button="config.cssConfirmButton"
                            :enable-confirm-button="enableSaveButton"
                            :is-submitting="config.isSubmitting"
                            :is-back-circle="config.isBackCircle"
                            :show-back-button-at-bottom="true"
                            @on-confirm="onSave"
                            @on-back="$emit('on-back')"
                            css-footer="border-0"
                        ></pop-up-footer>
                    </template>
                </popup-container>
            </div>
        </div>
</template>

<script>
import PopupContainer from './PopupContainer.vue'
import PopUpFooter from './PopupFooter.vue'
export default {
     props: {
        config: { type: Object, default: () => ({}) },
        isShowing: { type: Boolean, default: false },
        enableSaveButton: { type: Boolean, default: false },
        showFooter: { type: Boolean, default: true },
    },
    cwComponents: {
        PopupContainer,
        PopUpFooter: PopUpFooter()
    },
    methods: {
        onSave: function() {
            this.$emit('on-save');
        },
        onClose: function() {
            this.$emit('on-close');
        },
    },
    computed: {
        popupSize: function() {
            let size = this.config.size;
            switch (size) {
                case 'sm':
                    return 'cec-popup--width-300';
                case 'md':
                    return 'cec-popup--width-500';
                case 'lg':
                    return 'cec-popup--width-600';
                case 'xl':
                    return 'cec-popup--width-700';
                case 'xxl':
                    return 'cec-popup--width-800';
                default:
                    return 'cec-popup--width-500';
            }
        },
        // cssMobileFullScreen: function() {
        //     if (this.config.isMobileFullScreen) return 'cec-popup--fullscreen';
        // },
        // cssPopupWrapper() {
        //     return `${this.popupSize} ${this.cssMobileFullScreen} popup-rounded-10 cec-popup-shadow--darker`;
        // }
    },
}
</script>