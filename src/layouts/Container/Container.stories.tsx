import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Container } from './Container'

const meta: ComponentMeta<typeof Container> = {
  title: 'components/Container',
  component: Container
}

export default meta

const Template: ComponentStory<typeof Container> = args => (
  <Container {...args} />
)

export const Default = Template.bind({})

Default.args = {}
