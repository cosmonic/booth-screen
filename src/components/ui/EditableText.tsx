import * as React from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'

type Props = {
  id: string
  children: string
}

function EditableText({ id, children }: Props): React.ReactElement {
  const [value, setValue] = useLocalStorage(`et-${id}`, children)

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    setValue(event.target.innerText)
  }

  return (
    <span contentEditable onInput={handleChange}>{value}</span>
  )
}

export default EditableText