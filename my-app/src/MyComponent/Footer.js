import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="2" xl="3" className='mx-auto mb-2'>
              <h4 className='text-uppercase fw-bold mb-3'style={{paddingTop:"30px"}}>
                <MDBIcon icon="gem" className="me-3" />
                Diana Eye Clinic 
              </h4>

            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-1 mt-1'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="4" xl="4" className='mx-auto  mb-2'>
              <h6 className='text-uppercase fw-bold mb-2 mt-2'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-20" />
                      Lavish Chaddha Software Engineer,Pune
                      
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='http://localhost:3000'>
          DianaClinic.com
        </a>
      </div>
    </MDBFooter>
  );
}