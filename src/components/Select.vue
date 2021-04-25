<template>
    <section class="select">
        <SelectItem
                class="select__input"
                v-bind:option="defaultOption"
                v-bind:small="small"
                v-bind:class="{
                    'select__input--active': selectBoolean,
                    'select__input--small': small
                }"
        />
        <div
                class="select__icon-container"
                @click="changeSelect"
                v-bind:class="{
                    'select__icon-container--active': selectBoolean,
                    'select__icon-container--small': small
                }">
            <font-awesome-icon class="select__icon" icon="angle-up" v-if="selectBoolean"/>
            <font-awesome-icon class="select__icon" icon="angle-down" v-else/>
        </div>
        <div class="select__dropdown" multiple v-if="selectBoolean">
            <SelectItem
                    v-for="(option, index) in options"
                    v-bind:key="index"
                    v-bind:index="index"
                    v-bind:option="option"
                    v-bind:small="small"
                    @clickItem="addToList"
            />
        </div>
    </section>
</template>

<script>
    import SelectItem from "./SelectItem";

    export default {
        name: "Select",
        components: {
            SelectItem
        },
        props: ['options', 'defaultOption', 'small'],
        data() {
            return {
                selectBoolean: false,
                event: {}
            }
        },
        methods: {
            changeSelect() {
                this.selectBoolean = !this.selectBoolean;
            },
            addToList(index) {
                this.$emit('addToList', index);
            }
        }
    }
</script>

<style scoped lang="scss">
.select {
    width: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 20px;

    &__input {
        height: 40px;
        border-radius: 4px;

        &--small {
            width: 150px;
        }

        &--active {
            border-color: #70d5b3;
        }
    }

    &__icon {
        top: 12px;
        position: relative;
        left: 15px;

        &-container {
            position: relative;
            width: 40px;
            height: 40px;
            border: 1px solid gray;
            border-radius: 0 4px 4px 0;
            bottom: 42px;
            left: 158px;

            &--small {
                left: 110px;
                border: none;
            }

            &:hover {
                cursor: pointer;
            }

            &--active:not(&--small) {
                background-color: #dff7ef;
                border-color: #70d5b3;
                color: #70d5b3;
            }
        }
    }

    &__dropdown {
        position: absolute;
        width: 200px;
        top: 41px;
    }

    &__option {
        height: 100%;
    }

    &__test {
        margin-top: 500px;
        width: 200px;
    }
}
</style>