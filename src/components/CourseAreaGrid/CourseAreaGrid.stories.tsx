import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { CourseAreaGrid } from './CourseAreaGrid'

const meta: ComponentMeta<typeof CourseAreaGrid> = {
  title: 'components/CourseGrid',
  component: CourseAreaGrid
}

export default meta

const Template: ComponentStory<typeof CourseAreaGrid> = args => (
  <CourseAreaGrid {...args} />
)

export const Default = Template.bind({})

Default.args = {}
