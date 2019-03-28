import React from 'react';
import { MDBMedia } from 'mdbreact';

const Risk = () => {
  return (
    <div>
      <h1>What are the risk in the future</h1>
      <MDBMedia list className="mt-3">
        <MDBMedia tag="li">
          <MDBMedia left href="#">
            <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg" alt="Generic placeholder image" />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>
              List-based media object
            </MDBMedia>
            Human destruction of nature is rapidly eroding the world’s capacity to provide food, 
            water and security to billions of people, 
            according to the most comprehensive biodiversity study in more than a decade.
            </MDBMedia>
        </MDBMedia>
        <MDBMedia tag="li">
          <MDBMedia left href="#">
            <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg" alt="Generic placeholder image" />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>
              List-based media object
            </MDBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MDBMedia>
        </MDBMedia>
        <MDBMedia tag="li">
          <MDBMedia left href="#">
            <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg" alt="Generic placeholder image" />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>
              List-based media object
            </MDBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MDBMedia>
        </MDBMedia>
      </MDBMedia>
    </div>
  );
}

export default Risk;