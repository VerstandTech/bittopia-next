import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { CategoryDropdown } from './CategoryDropdown'

const meta: ComponentMeta<typeof CategoryDropdown> = {
  title: 'components/CategoryDropdown',
  component: CategoryDropdown
}

export default meta

const Template: ComponentStory<typeof CategoryDropdown> = args => (
  <CategoryDropdown {...args} />
)

export const Default = Template.bind({})

Default.args = {}
