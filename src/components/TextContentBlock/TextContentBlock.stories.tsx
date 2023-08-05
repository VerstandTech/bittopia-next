import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { TextContentBlock } from './TextContentBlock'

const meta: ComponentMeta<typeof TextContentBlock> = {
  title: 'components/TextContentBlock',
  component: TextContentBlock
}

export default meta

const Template: ComponentStory<typeof TextContentBlock> = args => (
  <TextContentBlock {...args} />
)

export const Default = Template.bind({})

Default.args = {}
