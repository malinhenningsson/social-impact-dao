import React from "react"
import styled from "styled-components"
import campaign1 from "../assets/campaign1.png"
import campaign2 from "../assets/campaign2.png"
import campaign3 from "../assets/campaign3.png"
import logo from "../assets/logo.svg"

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  border: 2px solid #e2e3e5;
`

const Table = styled.table`
  z-index: 1;
  min-width: 56rem;
  border-spacing: 0;
  background: white;
`

const Thead = styled.thead`
  background-color: #f9fafb;
`

const Th = styled.th`
  text-align: start;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e3e5;
`

const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e3e5;
`

const FlexTd = styled.div`
  display: flex;
  align-items: center;
`

const BoldText = styled.div`
  font-weight: bold;
`

const LightText = styled.div`
  color: #6b7281;
`

// const Finished = styled.div`
//   width: fit-content;
//   background-color: #eee6ff;
//   color: #7c46e5;
//   font-weight: bold;
//   padding: 0 0.5rem;
//   border-radius: 0.5rem;
// `

const Active = styled.div`
  width: fit-content;
  background-color: #dcfce7;
  color: #176534;
  font-weight: bold;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
`

const Pending = styled.div`
  width: fit-content;
  background-color: #fef9c3;
  color: #854d0f;
  font-weight: bold;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
`

const Image = styled.img`
  height: 8rem;
  width: 12rem;
  object-fit: contain;
  object-position: center;
  border-radius: 0.2rem;
  margin-right: 1rem;
`

const Logo = styled.img`
  width: 160px;
  margin: -5.85rem auto 2.5rem;
`

const Campaigns = () => (
  <div>
    <Logo src={logo} alt="logo" />
    <Wrapper>
      <Table>
        <Thead>
          <tr>
            <Th>Campaign</Th>
            <Th>Organization</Th>
            <Th>Status</Th>
          </tr>
        </Thead>
        <tbody>
          <tr>
            <Td>
              <FlexTd>
                <Image src={campaign1} />
                <div>
                  <BoldText>We Demand Plastic Free Options</BoldText>
                  <LightText>
                    Having recyclable plastic on the shelves is...
                  </LightText>
                </div>
              </FlexTd>
            </Td>
            <Td>
              <div>End Plastic Waste</div>
            </Td>
            <Td>
              <Pending>Pending</Pending>
            </Td>
          </tr>
          <tr>
            <Td>
              <FlexTd>
                <Image src={campaign2} />
                <div>
                  <BoldText>Stop Harming Earth</BoldText>
                  <LightText>
                    Climate action is a task for all of us...
                  </LightText>
                </div>
              </FlexTd>
            </Td>
            <Td>
              <div>UNEP</div>
            </Td>
            <Td>
              <Active>Active</Active>
            </Td>
          </tr>
          <tr>
            <Td>
              <FlexTd>
                <Image src={campaign3} />
                <div>
                  <BoldText>Compensate Migrant Workers in Qatar</BoldText>
                  <LightText>
                    With migrant workers making up more than...
                  </LightText>
                </div>
              </FlexTd>
            </Td>
            <Td>
              <div>Amnesty International</div>
            </Td>
            <Td>
              <Active>Active</Active>
            </Td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  </div>
)

export default Campaigns
