import { useState } from "react"
import styled from "styled-components"
import imageSrc from "../assets/campaign1.png"
import lensterSrc from "../assets/images/lens.png"
import logo from "../assets/logo.svg"

const Container = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    z-index: 1;
    width: 100%;
    text-align: center;
    margin-top: -2.75rem;
  }
`

const Heading = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 1.65rem;
`

const Description = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.15rem;
`

const HeadingTwo = styled.h2`
  margin: 2rem 0 0.25rem;
  font-size: 1.25rem;
`

const LinkContainer = styled.div`
  padding: 0.75rem 0.75rem;
  border: 2px solid #e7e8eb;
  border-radius: 0.5rem;
  background-color: white;
  margin-right: 0.75rem;
`

const CopyButton = styled.button`
  width: 100px;
  background-color: white;
  border: 2px solid #e7e8eb;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: black;
`

const ShareLensterButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  margin: 2.5rem auto;
  background-color: #8b5cf7;
  color: white;
  border: 2px solid #7c3aed;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  width: fit-content;
  text-decoration: none;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Image = styled.img`
  width: 60%;
  margin: 0rem auto;
`

const Logo = styled.img`
  width: 120px;
  margin: 0 auto 2rem;
`

const ShareCampaignPage = ({ setPage }) => {
  const [copied, setCopied] = useState(false)

  return (
    <Container>
      <Logo src={logo} alt="logo" />

      <Heading>End Plastic Waste</Heading>
      <Description>We demand plastic free options</Description>
      <Image id="image-preview" src={imageSrc} />
      <HeadingTwo>Tracking link</HeadingTwo>
      <FlexContainer>
        <LinkContainer>https://empact.xyz/track9fslf</LinkContainer>
        <CopyButton onClick={() => setCopied(!copied)}>
          {copied ? "Copied!" : "Copy"}
        </CopyButton>
      </FlexContainer>
      <ShareLensterButton
        onClick={() => {
          setTimeout(() => {
            setPage("shared")
          }, 1000)
        }}
        href="https://lenster.xyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="image-preview"
          src={lensterSrc}
          alt="preview of image"
          style={{ height: "1.5rem", marginRight: "0.75rem" }}
        />{" "}
        Share on Lenster
      </ShareLensterButton>
    </Container>
  )
}

export default ShareCampaignPage
