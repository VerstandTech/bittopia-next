import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'

const meta: ComponentMeta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal
}

export default meta

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Default = Template.bind({})

Default.args = {}
