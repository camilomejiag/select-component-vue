<template>
    <div
            class="select-item"
            @click="clickItem(index)"
            v-bind:class="{
                'select-item--selected': option.selected,
                'select-item--default': option.default,
                'select-item--small': small
            }">
        <span class="select-item__text" v-bind:class="{'select-item__text--small': small}">{{option.label}}</span>
        <font-awesome-icon class="select-item__icon" icon="check" v-if="option.selected " />
    </div>
</template>

<script>
    export default {
        name: "SelectItem",
        props: ['option', 'index', 'small'],
        methods: {
           clickItem(index) {
               this.$emit('clickItem', index);
           },
        }
    }
</script>

<style scoped lang="scss">
.select-item {
    height: 35px;
    width: 198px;
    border: 1px solid gray;
    border-top: none;
    display: flex;
    align-items: center;
    position: relative;

    &:last-of-type, &--default {
        border-radius: 0 0 4px 4px;
    }

    &:hover:not(&--default) {
        cursor: pointer;
        background-color: #dff7ef;
        border: 1px solid #70d5b3;
    }

    &--selected {
        .select-item__icon {
            color: #70d5b3;
        }
    }

    &--default {
        border-top: 1px solid gray;

        &.select__input--active {
            border-color: #70d5b3;
        }
    }

    &__text {
        margin-left: 20px;

        &--small {
            margin-left: 5px;
        }
    }

    &--small {
        width: 150px;
    }

    &__icon {
        position: absolute;
        right: 10px;
    }
}
</style>