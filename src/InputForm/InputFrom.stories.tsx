import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import InputForm from '.'

const Template: ComponentStory<typeof InputForm> = () => {
  return <InputForm />
}

export const Default = Template.bind({})

export default {
  title: 'Component/InputForm',
  component: InputForm,
} as ComponentMeta<typeof InputForm>
