import { h, render } from 'vue'
import Message from '~/components/Message.vue'

function removeElement(el: Element) {
  if (typeof el.remove !== 'undefined')
    el.remove()
  else
    el.parentNode?.removeChild(el)
}

function createComponent(component: any, props = {}, parentContainer: Element, slots = {}) {
  const vNode = h(component, props, slots)
  let container = document.querySelector('.message-container')
  if (container)
    removeElement(container)

  container = document.createElement('div')
  container.classList.add('message-container')
  parentContainer.appendChild(container)
  render(vNode, container)

  return vNode.component
}

export const $message = (props = {}, slots = {}) => createComponent(Message, props, document.body, slots)
