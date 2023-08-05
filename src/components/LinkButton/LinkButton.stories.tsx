import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { LinkButton } from './LinkButton'

const meta: ComponentMeta<typeof LinkButton> = {
  title: 'components/LinkButton',
  component: LinkButton
}

export default meta

const Template: ComponentStory<typeof LinkButton> = args => (
  <LinkButton {...args} />
)

export const Default = Template.bind({})

Default.args = {}
