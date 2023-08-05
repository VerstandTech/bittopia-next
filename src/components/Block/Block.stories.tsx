import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Block } from './Block'

const meta: ComponentMeta<typeof Block> = {
  title: 'components/Block',
  component: Block
}

export default meta

const Template: ComponentStory<typeof Block> = args => <Block {...args} />

export const Default = Template.bind({})

Default.args = {}
