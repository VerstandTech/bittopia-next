import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { BlockMenu } from './BlockMenu'

const meta: ComponentMeta<typeof BlockMenu> = {
  title: 'components/BlockMenu',
  component: BlockMenu
}

export default meta

const Template: ComponentStory<typeof BlockMenu> = args => (
  <BlockMenu {...args} />
)

export const Default = Template.bind({})

Default.args = {}
