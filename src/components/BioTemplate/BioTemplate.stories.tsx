import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { BioTemplate } from './BioTemplate'

const meta: ComponentMeta<typeof BioTemplate> = {
  title: 'components/BioTemplate',
  component: BioTemplate
}

export default meta

const Template: ComponentStory<typeof BioTemplate> = args => (
  <BioTemplate {...args} />
)

export const Default = Template.bind({})

Default.args = {}
