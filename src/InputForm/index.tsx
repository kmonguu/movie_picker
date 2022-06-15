/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function InputForm() {
  return (
    <div css={wrapperCss}>
      <input placeholder="영화제목을 입력하세요." />
      <button>저장</button>
    </div>
  )
}

const wrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    margin: 20px;
    padding: 5px;
  }

  > button {
    width: 50px;
    height: 30px;
  }
`

export default InputForm
