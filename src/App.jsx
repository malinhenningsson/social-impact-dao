import { useState } from "react"
import styled from "styled-components"
import LandingPage from "./pages/LandingPage"
import CreateCampaign from "./pages/CreateCampaign"
import PlasticWebsite from "./pages/PlasticWebsite"
import Campaigns from "./pages/Campagins"
import bg from "./assets/images/bg.jpeg"
import SharedCampaignsPage from "./pages/SharedCampaignsPage"
import logo from "./assets/logo.svg"

const Container = styled.main`
  position: relative;
  display: grid;
  place-items: center;
  height: 100vh;

  @media (min-width: 600px) {
    background-image: url(${bg});
  }
`

const Logo = styled.img`
  display: none;

  @media (min-width: 600px) {
    display: block;
    position: absolute;
    top: 12.5rem;
    right: 23.5rem;
    width: 254px;
  }
`

const App = () => {
  const [page, setPage] = useState("landing")

  const PAGES = {
    landing: <LandingPage setPage={setPage} />,
    create: <CreateCampaign setPage={setPage} />,
    campaigns: <Campaigns />,
    plastic: <PlasticWebsite />,
    shared: <SharedCampaignsPage />,
  }

  if (window.location.hash.includes("plastic")) {
    return (
      <Container>
        <PlasticWebsite />
      </Container>
    )
  }
  if (window.location.hash.includes("shared")) {
    return (
      <Container>
        <SharedCampaignsPage />
      </Container>
    )
  }
  return (
    <Container>
      {page === "landing" && <Logo src={logo} alt="logo" />}
      {PAGES[page]}
    </Container>
  )
}

export default App
