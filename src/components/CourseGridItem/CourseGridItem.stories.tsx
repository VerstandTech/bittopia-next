import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { CourseGridItem } from './CourseGridItem'

const meta: ComponentMeta<typeof CourseGridItem> = {
  title: 'components/CourseGridItem',
  component: CourseGridItem
}

export default meta

const Template: ComponentStory<typeof CourseGridItem> = args => (
  <CourseGridItem {...args} />
)

export const Default = Template.bind({})

Default.args = {}
