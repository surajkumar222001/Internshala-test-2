import React, { useState } from "react";
import { Navbar as NavB, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

let Navbar: React.FC = () => {
  const [radioValue, setRadioValue] = useState("2");

  const radios = [
    { name: "General", value: "1" },
    { name: "Users", value: "2" },
    { name: "Plan", value: "3" },
    { name: "Billing", value: "4" },
    { name: "Integrations", value: "5" },
  ];

  return (
    <React.Fragment>
      <Container className="mt-2">
        <h2>Company Settings</h2>
        <NavB expand="lg">
          <Nav variant="pills" defaultActiveKey="/home">
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  size="lg"
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-success" : "outline-danger"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Nav>
        </NavB>
      </Container>
    </React.Fragment>
  );
};
export default Navbar;
