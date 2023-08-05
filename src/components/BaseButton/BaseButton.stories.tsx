import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { BaseButton } from './BaseButton'

const meta: ComponentMeta<typeof BaseButton> = {
  title: 'components/BaseButton',
  component: BaseButton
}

export default meta

const Template: ComponentStory<typeof BaseButton> = args => (
  <BaseButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  onClick: () => {
    console.log('hello')
  }
}
