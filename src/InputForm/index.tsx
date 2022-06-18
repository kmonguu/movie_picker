/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface InputFormProps {
  handleRandomNumber: () => void
  value: any
  onChange: any
}

function InputForm({ handleRandomNumber, value, onChange }: InputFormProps) {
  return (
    <div css={wrapperCss}>
      <input placeholder="영화제목을 맞춰보세요!" value={value} onChange={onChange} />
      <button onClick={handleRandomNumber}>저장</button>
    </div>
  )
}

const wrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    margin: 40px 27px 40px 0;
    padding: 5px;
  }

  > button {
    width: 50px;
    height: 30px;

    border: none;
    border-radius: 5px;
    background: #5c829c;
    color: #fff;

    :hover {
      background: #53748a;
      cursor: pointer;
    }
  }
`

export default InputForm
