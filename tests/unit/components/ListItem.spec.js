import { mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

describe('ListItem.vue', () => {
    it('expect component to be defined', () => {
        const item = {
            value: '0',
            default: true,
            label: 'Rick',
            selected: ''
        }
        const wrapper = mount(ListItem, {
            props: { item }
        })
        expect(wrapper.find(".list-item__name").text()).toBe("Name Rick")
    })
})
