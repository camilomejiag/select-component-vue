<template>
    <section class="select">
        <SelectItem
                class="select__input"
                v-bind:option="defaultOption"
                v-bind:class="{ 'select__input--active': selectBoolean}"
        />
        <div class="select__icon-container" v-bind:class="{'select__icon-container--active': selectBoolean}">
            <font-awesome-icon class="select__icon" icon="angle-up" @click="changeSelect" v-if="selectBoolean"/>
            <font-awesome-icon class="select__icon" icon="angle-down" @click="changeSelect" v-else/>
        </div>
        <div class="select__dropdown" multiple v-if="selectBoolean">
            <SelectItem
                    v-for="(option, index) in availableOptions"
                    v-bind:key="index"
                    v-bind:index="index"
                    v-bind:option="option"
                    @clickItem="addToList"
            />
        </div>
    </section>
</template>

<script>
    // import { ohJeezService } from "../core/services/OhJeezService";
    import SelectItem from "./SelectItem";

    export default {
        name: "Select",
        components: {
            SelectItem
        },
        data() {
            return {
                defaultOption: {
                    value: '0',
                    label: 'Default',
                    selected: false
                },
                availableOptions: [
                    {
                        value: '1',
                        label: 'Value 1',
                        selected: false
                    },
                    {
                        value: '2',
                        label: 'Value 2',
                        selected: false
                    },
                    {
                        value: '3',
                        label: 'Value 3',
                        selected: false
                    }
                ],
                selectedOptions: [],
                selectBoolean: false,
                event: {}
            }
        },
        methods: {
            changeSelect() {
                this.selectBoolean = !this.selectBoolean;
            },
            hideSelect() {
                this.selectBoolean = false;
            },
            addToList(index) {
                if (this.availableOptions[index].selected) {
                    this.availableOptions[index].selected = true;
                    this.selectedOptions[index].selected = false;
                } else {
                    this.availableOptions[index].selected = false
                    this.selectedOptions[index].selected = true;
                }
            }
        },
        created() {
            this.selectedOptions = [...this.availableOptions]
        }
    }
</script>

<style scoped lang="scss">
.select {
    width: 200px;
    display: flex;
    flex-direction: column;
    position: relative;

    &__input {
        height: 40px;
        border-radius: 4px;

        &--active {
            border-color: #70d5b3;
        }
    }

    &__icon {
        padding-top: 12px;

        &-container {
            position: relative;
            width: 40px;
            height: 40px;
            border: 1px solid gray;
            border-radius: 0 4px 4px 0;
            bottom: 42px;
            left: 158px;

            &--active {
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