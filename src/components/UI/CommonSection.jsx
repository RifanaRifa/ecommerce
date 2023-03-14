import React from 'react'//rafce enter  
import { Container } from 'reactstrap'
import "../../styles/common-section.css";

const CommoSection = ({ title }) => {
  return (
    <section className='common_section'>
      <Container className='text-center'>
        <h1>{title}</h1>
      </Container>

    </section>
  )
}

export default CommoSection