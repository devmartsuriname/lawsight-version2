import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <div className="row">
          <div className="col-12 text-center">
            {new Date().getFullYear()} © VP Engineering. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
