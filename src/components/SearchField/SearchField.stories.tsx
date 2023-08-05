import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { SearchField } from './SearchField'

const meta: ComponentMeta<typeof SearchField> = {
  title: 'components/SearchField',
  component: SearchField
}

export default meta

const Template: ComponentStory<typeof SearchField> = args => (
  <SearchField {...args} />
)

export const Default = Template.bind({})

Default.args = {}
