import { shallowMount } from '@vue/test-utils'
import Select from '@/components/Select.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faCheck, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add([faPhone, faCheck, faAngleDown, faAngleUp]);

describe('Select.vue', () => {
    it('expect component to be defined', () => {
        const options = [
            {
                value: '0',
                default: true,
                label: 'Rick',
                selected: true
            }
        ]
        const wrapper = shallowMount(Select, {
            props: { options }
        })
        expect(wrapper).toBeDefined();
    })
})
