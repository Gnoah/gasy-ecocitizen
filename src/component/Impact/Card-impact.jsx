import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard className="card-image" style={{
              backgroundImage: "url('/img/impact02.jpg')"
            }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 className="pink-text">
                <MDBIcon icon="" />The world
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Deforestation</strong>
              </MDBCardTitle>
              <p>
              Deforestation is causing global climate change as well as local change. ... The increase in the carbon content of the atmosphere will therefore lead to an increase in the greenhouse effect, and therefore to global warming.
              </p>
              <MDBBtn color="pink">
                {/* <MDBIcon icon="clone left" /> View project */}
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="card-image" style={{
              backgroundImage:
                "url('/img/impact03.jpg')"
            }}>
          <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
            <div>
              <h5 className="orange-text">
                <MDBIcon icon="" /> Sad
              </h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>Rest of the world</strong>
              </MDBCardTitle>
              <p>           
              Madagascar's deforestation problem results from the harmful actions of ourselves on our ancestral lands, namely: the "Tavy" or slash-and-burn crop for agriculture and livestock, the logging of our tropical forests on the Côte -Is like the wild export of rosewood, and finally the production of charcoal as a domestic fuel.
              </p>
              <MDBBtn color="deep-orange">
                {/* <MDBIcon icon="clone left" /> View project */}
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;