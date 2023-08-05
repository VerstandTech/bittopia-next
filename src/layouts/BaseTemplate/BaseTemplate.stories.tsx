import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { BaseTemplate } from './BaseTemplate'

const meta: ComponentMeta<typeof BaseTemplate> = {
  title: 'components/BaseTemplate',
  component: BaseTemplate
}

export default meta

const Template: ComponentStory<typeof BaseTemplate> = args => (
  <BaseTemplate {...args} />
)

export const Default = Template.bind({})

Default.args = {}
