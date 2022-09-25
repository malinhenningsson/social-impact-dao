import { useState } from "react"
import styled from "styled-components"
import Form from "../components/Form"
import imageSrc from "../assets/campaign1.png"
import logo from "../assets/logo.svg"

const Container = styled.div`
  z-index: 1;
`

const Logo = styled.img`
  width: 160px;
  margin: -4rem auto 2rem;
`

const CreateCampaign = (props) => {
  const { setPage } = props
  const [campaignName, setCampaignName] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [budget, setBudget] = useState("")
  const [description, setDescription] = useState("")
  const [trackingId, setTrackingId] = useState("")
  const [image, setImage] = useState("")

  const onFormClick = () => {
    setCampaignName("Campaign name")
    setOrganisation("Org")
    setBudget("10.000$")
    setDescription("Description")
    setTrackingId("id")
    setImage(imageSrc)
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form
        onFormClick={onFormClick}
        campaignName={campaignName}
        budget={budget}
        organisation={organisation}
        description={description}
        trackingId={trackingId}
        image={image}
        setCampaignName={setCampaignName}
        setBudget={setBudget}
        setOrganisation={setOrganisation}
        setDescription={setDescription}
        setTrackingId={setTrackingId}
        setImage={setImage}
        setPage={setPage}
      />
    </Container>
  )
}

export default CreateCampaign
