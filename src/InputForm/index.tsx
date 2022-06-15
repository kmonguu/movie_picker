/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css'
import React, { ChangeEvent, useState } from 'react'

function InputForm() {
  return (
    <div css={wrapperCss}>
      <input placeholder="영화제목을 입력하세요." />
    </div>
  )
}

const wrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default InputForm
