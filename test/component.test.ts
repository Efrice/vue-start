import { mount } from '@vue/test-utils'
import TheCounter from '~/components/TheCount.vue'

describe('component of TheCount.vue', () => {
  it('should render', () => {
    const wrapper = mount(TheCounter, { props: { initial: 10 } })

    expect(wrapper.text()).toContain('10')
    expect(wrapper.html()).toMatchInlineSnapshot(`"<button type="button" btn="">10</button>"`)
  })

  it('should be interactive', async () => {
    const wrapper = mount(TheCounter, { props: { initial: 0 } })

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})
