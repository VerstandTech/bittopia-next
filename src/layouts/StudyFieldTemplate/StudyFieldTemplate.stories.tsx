import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { StudyFieldTemplate } from './StudyFieldTemplate'

const meta: ComponentMeta<typeof StudyFieldTemplate> = {
  title: 'layouts/StudyFieldTemplate',
  component: StudyFieldTemplate
}

export default meta

const Template: ComponentStory<typeof StudyFieldTemplate> = args => (
  <StudyFieldTemplate {...args} />
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
}
