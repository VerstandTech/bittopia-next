import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { CourseListItem } from './CourseListItem'

const meta: ComponentMeta<typeof CourseListItem> = {
  title: 'components/CourseListItem',
  component: CourseListItem
}

export default meta

const Template: ComponentStory<typeof CourseListItem> = args => (
  <CourseListItem {...args} />
)

export const Default = Template.bind({})

Default.args = {}
