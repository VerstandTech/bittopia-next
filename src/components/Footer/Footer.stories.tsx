import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Footer } from './Footer'

const meta: ComponentMeta<typeof Footer> = {
  title: 'components/Footer',
  component: Footer
}

export default meta

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {}
