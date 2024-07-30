

<script>

import { CwPopup } from '../global/CwPopup.vue';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
export default {
    name: 'popup-learning-management-update',
    translationKeys: [
        'name',
        'pin-to-top',
        'show',
        'learning-management-updates',
    ],
    props: {
    classes: {
        type: Array,
        default: () => ([]),
        required: true,
    },
    isShowing: { type: Boolean }
    },
    cwComponents: {
        ImageItem,
        CwPopup,
    },
    data() {
        return {
            popupConfig: {
            title: this.translate('learning-management-updates'),
            size: 'md',
            cssBodyWrapper: 'cec-mt-5',
            },
            classList: [],
            originalClassList: [],
            isSaving: false,
        };
    },
    created() {
        this.classList = cloneDeep(this.classes);
        this.originalClassList = cloneDeep(this.classes);
    },
    computed: {
        disableSaveButton() {
            return isEqual(this.classList, this.originalClassList);
    },
    },
    methods: {
        onClosePopup() {
            this.$emit('on-close-popup');
        },
        togglePin(classItem) {
            classItem.pinned = !classItem.pinned;
        },
        saveLearningManagementState() {
            this.isSaving = true;
            setTimeout(() => {
            this.isSaving = false;
            this.originalClassList = cloneDeep(this.classList);
            this.onClosePopup();
            }, 1000);
    },
}
}
</script>
<template>
     <cw-popup
            :config="popupConfig"
            :is-showing="isShowing"
            @on-close="onClosePopup">
            <div class=".popup-learning-management-update mt-2">
                <div v-for="(classItem, index) in classList" :key="index" class="single-class d-flex align-items-center justify-content-between border-top border-top-style-dash px-2">
                    <div class="w-70">
                        <div class="learning-profile">
                            <img :src="classItem.bannerUrl" :alt="classItem.name" class="image__item" />
                            <span class="text-truncate mb-1 font-weight-bold">
                                {{ classItem.name }}
                            </span>
                        </div>
                    </div>
                    <div class="w-15">
                        <input type="checkbox" v-model="classItem.show" />
                    </div>
                    <div class="w-15">
                        <a href="javascript:;" @click="togglePin(classItem)" class="text-black dropdown-item">
                            <cw-svg-icon
                            :icon-url="classItem.pinned ? svgIconUrl('pinned') : svgIconUrl('unpin')"
                            css-class="cw-icon-sm mt-1"
                            ></cw-svg-icon>
                        </a>
                    </div>
                </div>
                <div class="d-flex mt-4 justify-content-end">
                    <pop-up-footer
                        :enable-confirm-button="!disableSaveButton"
                        :is-submitting="isSaving"
                        @on-confirm="saveLearningManagementState"
                        confirm-button-title="save"
                        css-footer="d-md-inline align-self-center"
                        css-confirm-button="btn--width-240 cec-mr-"
                    ></pop-up-footer>
                </div>
            </div>
        </cw-popup>
</template>