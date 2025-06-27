import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterC() {
  return (
    <MDBFooter style={{height: '95px', marginTop: '101px'}} bgColor='info' className='text-center text-lg-left'>
      <div className='text-center p-3'>
        <p className='text-dark'>
          ComplaintCare
        </p>
        <p className='text-dark'>&copy; {new Date().getFullYear()}</p>
      </div>
    </MDBFooter>
  );
}
