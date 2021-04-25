import { shallowMount } from '@vue/test-utils'
import SelectItem from '@/components/SelectItem.vue'

describe('SelectItem.vue', () => {
    it('expect component to be defined', () => {
        const option = {
            value: '0',
            default: true,
            label: 'Rick',
            selected: true
        }
        const wrapper = shallowMount(SelectItem, {
            props: { option }
        })
        expect(wrapper).toBeDefined();
    })
})
