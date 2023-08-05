import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { EditProfileModal } from './EditProfileModal'

const meta: ComponentMeta<typeof EditProfileModal> = {
  title: 'components/EditProfileModal',
  component: EditProfileModal
}

export default meta

const Template: ComponentStory<typeof EditProfileModal> = args => (
  <EditProfileModal {...args} />
)

export const Default = Template.bind({})

Default.args = {}
