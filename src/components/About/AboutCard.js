import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Huzaifa Sserugo </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am an Electrical Engineer currently working with Mantrac Uganda as a Field Service Engineer deployed in the Total Tilenga Project.
            I oversee Generators powering the many sections at the Drill Support Base (DSB), the rigs, and Buliisa camp.
            <br />
            When the generators are not having any problems, I use the free time to write some code. I am not a developer or programmer, I just know 
            some little bits of Django, React, Git and Github, and most of the basics of programing.
            <br />
            <br />
            Apart from Electrical Engineering, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Huzaifasserugo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
