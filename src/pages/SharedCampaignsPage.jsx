import React from "react"
import styled from "styled-components"
import imageSrc from "../assets/plastic-avatar.jpg"
import campaign1 from "../assets/campaign1.png"
import campaign2 from "../assets/campaign2.png"
import logo from "../assets/logo.svg"

const Container = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    z-index: 1;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
`

const Name = styled.p`
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  font-weight: bold;
`

const UserName = styled.p`
  margin-bottom: 1rem;
`

const Cash = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`

const Heading = styled.p`
  font-size: 1.15rem;
  font-weight: 500;
  text-align: left;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`

const Campaign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 2px solid #e7e8eb;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  margin: 0.5rem 0;
`

const UserImage = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  object-position: center;
  border-radius: 100%;
  border: 3px solid black;
  margin: 1rem auto;
`

const CampaignImage = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
  margin-right: 1rem;
`

const Logo = styled.img`
  width: 120px;
  margin: -4rem auto 2rem;
`

const SharedCampaignsPage = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <UserImage src={imageSrc} />
      <Name>Empact Activist</Name>
      <UserName>@empactactivist</UserName>
      <Cash>8 EMP</Cash>

      <Heading>My shared campaigns</Heading>
      <Campaign>
        <FlexContainer>
          <CampaignImage src={campaign1} />
          <div>
            <p style={{ fontWeight: "600" }}>End Plastic Waste</p>
            <p>Having recyclable plastic...</p>
          </div>
        </FlexContainer>
        <p style={{ fontWeight: "600" }}>1.5 EMP</p>
      </Campaign>
      <Campaign>
        <FlexContainer>
          <CampaignImage src={campaign2} />
          <div>
            <p style={{ fontWeight: "600" }}>UNEP</p>
            <p>Climate action is a task...</p>
          </div>
        </FlexContainer>
        <p style={{ fontWeight: "600" }}>6.5 EMP</p>
      </Campaign>
    </Container>
  )
}

export default SharedCampaignsPage
