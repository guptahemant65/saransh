import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

const About = () => {
	return (
		<Container fluid="md">
			<Card style={{}} className="aboutCard">

				<Col>
					<Card.Body>
						<Card.Title>Saransh</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">your project manager, for you.</Card.Subtitle>
						<Card.Text>
							<b>
								Tired of having 2-hour long “standup meetings” which were supposed to be of barely 15
								minutes?
							</b>
							We feel your pain too! So we thought of inventing something that can save you those
							unproductive hours. Here we present,{' '}
							<b>
								Saransh - a tool that generates a report, taking into account all the project related
								activities done throughout the day by each developer.
							</b>{' '}
							Our prime motive is to empower Program Managers with a tool that brings all the work done by
							their developers on BitBucket, down to a single page.
							<br />
							<br />
							<b>Features:</b>
							<ul>
								<li>Encourages transparency among peers.</li>
								<li>Reduces unproductive man-hours.</li>
								<li>
									Enlists & categorizes each activity done, all at a single place; saving you from a
									lot of hassle.
								</li>
								<li>
									Doesn’t let your ability to justify yourself come in the way of your promotion. We
									help your work speak for itself.
								</li>
							</ul>
							<br />
						</Card.Text>
						<Card.Title>Our team</Card.Title>
						<Row>
							<Card style={{ width: '18rem' }} className="teamCard">
								<Card.Img src="https://i.ibb.co/TYkG89j/harish.jpg" />
								<Card.Body>
									<Card.Title>Harish Meena</Card.Title>

									<Card.Link href="https://www.linkedin.com/in/harish/" target="blank">
										LinkedIn
									</Card.Link>
									<Card.Link href="https://github.com/HarishKumarMeena" target="blank">
										Github
									</Card.Link>
								</Card.Body>
							</Card>

							<Card style={{ width: '18rem' }} className="teamCard">
								<Card.Img variant="top" src="https://i.ibb.co/5Mj4xnD/hemant.jpg" />
								<Card.Body>
									<Card.Title>Hemant Gupta</Card.Title>

									<Card.Link href="https://www.linkedin.com/in/hmg/" target="blank">
										LinkedIn
									</Card.Link>
									<Card.Link href="https://github.com/guptahemant65" target="blank">
										Github
									</Card.Link>
								</Card.Body>
							</Card>
						</Row>
					</Card.Body>
				</Col>
			</Card>
		</Container>
	);
};

export default About;
