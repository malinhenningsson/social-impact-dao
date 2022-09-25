import { useRef } from "react"
import styled from "styled-components"
import * as S from "./styles"

const Label = styled.label`
  font-weight: 500;
`

const Form = (props) => {
  const {
    onFormClick,
    campaignName,
    budget,
    organisation,
    trackingId,
    setCampaignName,
    setBudget,
    setOrganisation,
    setTrackingId,
    setImage,
    image,
    setPage,
  } = props
  const imageRef = useRef()

  return (
    <S.CreateForm onClick={onFormClick}>
      <Label htmlFor="campaing-name">Campaign name</Label>
      <S.Input
        type="text"
        name="campaign-name"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />

      <S.InputRow>
        <S.InputColumn>
          <Label htmlFor="organization">Organization</Label>
          <S.Input
            type="text"
            name="organisation"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
        </S.InputColumn>

        <S.InputColumn>
          <Label htmlFor="budget">Budget</Label>
          <S.Input
            type="text"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </S.InputColumn>
      </S.InputRow>

      <Label htmlFor="tracking-id">Tracking link</Label>
      <S.Input
        type="text"
        name="tracking-id"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />

      <S.ImageUpload>
        <Label>Image</Label>
        <S.ImageUploadLabel htmlFor="image-upload">
          <S.FlexLabel>
            {image ? (
              <img
                ref={imageRef}
                id="image-preview"
                src={image}
                alt="preview of image"
                style={{ opacity: image ? 1 : 0, maxHeight: "8rem" }}
              />
            ) : (
              <S.UploadText>
                <span>Upload a file</span> or drag and drop <br />
                PNG, JPG, GIF up tp 10MB
              </S.UploadText>
            )}
          </S.FlexLabel>
        </S.ImageUploadLabel>
        <S.HiddenInput
          id="image-upload"
          type="file"
          name="image-upload"
          onChange={(e) => {
            const file = e.target.files[0]
            if (file) {
              setImage(file)
              imageRef.current.src = URL.createObjectURL(file)
            }
          }}
        />
      </S.ImageUpload>

      <S.Button
        onClick={() => setPage("campaigns")}
        style={{ opacity: image ? 1 : 0.6 }}
      >
        Create campaign
      </S.Button>
    </S.CreateForm>
  )
}

export default Form
