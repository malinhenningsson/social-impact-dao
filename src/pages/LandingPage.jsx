import styled from "styled-components"
import * as S from "../components/styles"
import ShareCampaignPage from "./ShareCampaignPage"
// import * as EpnsAPI from "@epnsproject/sdk-restapi"
// import * as ethers from "ethers"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Futura;
  text-align: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Heading = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`

const Text = styled.p`
  margin-top: 1rem;
  font-size: 1.65rem;
  max-width: 640px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.35rem;
`

const LandingPage = ({ setPage }) => {
  // const PK = "972faff600e7883dba2ce52a67c4fc34c417a72147d69fb9fc5d00ed30758ccd"
  // const Pkey = `0x${PK}`
  // const signer = new ethers.Wallet(Pkey)

  // const sendNotification = async () => {
  //   try {
  //     const apiResponse = await EpnsAPI.payloads.sendNotification({
  //       signer,
  //       type: 3, // target
  //       identityType: 2, // direct payload
  //       notification: {
  //         title: `titlez`,
  //         body: `bodyz`,
  //       },
  //       payload: {
  //         title: `payload title`,
  //         body: `sample msg body`,
  //         cta: "www.paypal.com",
  //         img: "",
  //       },
  //       recipients: "eip155:42:0xb1d97f8DBe9B4C971622df75F0D02Bb50955b526", // recipient address
  //       channel: "eip155:42:0xb1d97f8DBe9B4C971622df75F0D02Bb50955b526", // your channel address
  //       env: "prod",
  //     })

  //     // apiResponse?.status === 204, if sent successfully!
  //     console.log("API repsonse: ", apiResponse)
  //   } catch (err) {
  //     console.error("Error: ", err)
  //   }
  // }

  return (
    <>
      <Container>
        <Heading>Turn ideas into impact</Heading>
        <Text>
          We empower activists to promote issues that matter and drive their
          audiences to positive action.
        </Text>
        <ButtonContainer>
          <S.Button onClick={() => setPage("create")}>Create campaign</S.Button>
          <S.Button secondary>Connect wallet</S.Button>
        </ButtonContainer>
      </Container>
      <ShareCampaignPage setPage={setPage} />
    </>
  )
}

export default LandingPage
