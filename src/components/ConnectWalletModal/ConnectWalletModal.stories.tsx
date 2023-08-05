import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ConnectWalletModal } from './ConnectWalletModal'

const meta: ComponentMeta<typeof ConnectWalletModal> = {
  title: 'components/ConnectWalletModal',
  component: ConnectWalletModal
}

export default meta

const Template: ComponentStory<typeof ConnectWalletModal> = args => (
  <ConnectWalletModal {...args} />
)

export const Default = Template.bind({})

Default.args = {}
