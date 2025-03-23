import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center p-5">
        <h1>Bayer Healthcare</h1>
      </div>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/health-topics">Health Topics</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Button onClick={onLogin}>Login/Register</Button>
        </Container>
      </Navbar>

      <div className="d-flex justify-content-center align-items-center flex-column pt-5 pb-5">
        <h1>Your Health, Our Priority</h1>
        <span>
          Explore the latest health information and resources afrom Bayer
          Healthcare
        </span>
      </div>

      <div className="d-flex justify-content-center flex-column">
        <h3>Featured Health Topics</h3>
        <div className="d-flex justify-content-md-between">
          <div className="card mt-4 p-3 shadow-sm">
            <h4>COVID-19 Updates</h4>
            <p>
              Stay Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>

            <Button>Learn More</Button>
          </div>

          <div className="card mt-4 p-3 shadow-sm">
            <h4>Heart Health</h4>
            <p>
              Stay Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>

            <Button>Learn More</Button>
          </div>

          <div className="card mt-4 p-3 shadow-sm">
            <h4>Mental Wellness</h4>
            <p>
              Stay Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>

            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
