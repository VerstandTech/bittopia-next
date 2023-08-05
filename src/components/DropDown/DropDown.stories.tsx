import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { DropDown } from './DropDown'

const meta: ComponentMeta<typeof DropDown> = {
  title: 'components/DropDown',
  component: DropDown
}

export default meta

const Template: ComponentStory<typeof DropDown> = args => (
  <DropDown {...args} />
)

export const Default = Template.bind({})

Default.args = {}
