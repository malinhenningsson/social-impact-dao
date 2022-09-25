import styled from "styled-components"

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 35rem;
`

export const InputRow = styled.div`
  display: flex;
  gap: 2rem;
`

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Input = styled.input`
  border: 2px solid #e7e8eb;
  border-radius: 0.5rem;
  height: 3rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  &:focus {
    outline: none;
  }
`

export const TextArea = styled.textarea`
  border: 2px solid #e7e8eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  min-height: 5rem;
`

export const ImageUpload = styled.div`
  margin-bottom: 3rem;
`

export const HiddenInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`

export const ImageUploadLabel = styled.label`
  display: block;
  border: 2px dashed #e7e8eb;
  border-radius: 0.5rem;
  height: 10rem;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  text-align: center;
`
export const FlexLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const UploadText = styled.div`
  font-size: 0.85rem;
  span {
    color: #2bae5b;
    font-weight: 500;
  }
`

export const Button = styled.button`
  background: ${({ secondary }) => (secondary ? "white" : "#2bae5b")};
  color: ${({ secondary }) => (secondary ? "#0a0a0a" : "white")};
  border: 2px solid;
  border-color: ${({ secondary }) => (secondary ? "#ccc" : "#2bae5b")};
  padding: 0.65rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.15rem;
  font-weight: 500;
  cursor: pointer;
`
