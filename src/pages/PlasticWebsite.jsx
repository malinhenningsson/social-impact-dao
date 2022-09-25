import { useState } from "react"
import styled from "styled-components"
import bg from "../assets/plastic_website_bg.jpg"

const Container = styled.div`
  position: relative;
  height: 100vh;
`

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.2;
`

const Text = styled.p`
  width: 100%;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.05rem;
  padding-right: 4rem;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 320px;
  margin-top: 2rem;
`

const Label = styled.label`
  font-weight: 500;
  font-size: 1.15rem;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem 0.75rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: rgb(215, 48, 16);
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Bg = styled.img`
  opacity: 0.25;
`

const Input = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e7e8eb;
  border-radius: 0.5rem;
  background: white;
  height: 3rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
`

const Spinner = styled.svg`
  animation: spin 1s linear infinite;
  margin-left: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const PlasticWebsite = () => {
  const [loading, setLoading] = useState(false)
  const [filled, setFilled] = useState(false)
  const [signed, setSigned] = useState(false)

  const submit = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSigned(true)
    }, 2000)
  }

  return (
    <Container>
      <Bg src={bg} alt="background" />
      <Wrapper>
        <Heading>Banish one-time plastic waste newsletter</Heading>
        <Text>
          Having recyclable plastic on the shelves is not good enough. We as
          consumers need to put pressure on these big companies to make sure
          they follow suit as to what is happening to ourplanet. Sign up now!
        </Text>
        <Form onClick={() => setFilled(true)}>
          <Label>First name</Label>
          <Input>{filled ? "John" : ""}</Input>

          <Label>Last name</Label>
          <Input>{filled ? "Doe" : ""}</Input>

          <Label>Email</Label>
          <Input>{filled ? "john@doe.com" : ""}</Input>

          <Button
            onClick={() => submit()}
            style={{ opacity: loading ? 0.6 : 1 }}
          >
            {signed ? "Thank you!" : "Sign up"}
            {loading && (
              <Spinner
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#f1a4a4"
                  strokeWidth="4"
                ></circle>
                <path
                  fill="white"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </Spinner>
            )}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default PlasticWebsite
