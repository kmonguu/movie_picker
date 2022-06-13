import React, { ChangeEvent, useState } from 'react'

function InputForm({ username, age }: any) {
  return (
    <div>
      <span>{username}</span>&nbsp;
      <span>{age}</span>
    </div>
  )
}

export default InputForm
