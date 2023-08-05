import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { SideNavigation } from './SideNavigation'

const meta: ComponentMeta<typeof SideNavigation> = {
  title: 'components/SideNavigation',
  component: SideNavigation
}

export default meta

const Template: ComponentStory<typeof SideNavigation> = args => (
  <SideNavigation {...args} />
)

export const Default = Template.bind({})

Default.args = {}
