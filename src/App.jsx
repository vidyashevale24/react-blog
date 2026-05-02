
// import './App.css'
import { Button, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

function App() {

	const users = [
		{ id: 1, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 2, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 3, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 4, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 5, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 6, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 7, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 8, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 9, name: "Vidya Sagar", role: "Software Engineer" },
		{ id: 10, name: "Vidya Sagar", role: "Software Engineer" }
	];

	const cardStyle = {
		width: "100%",
		maxWidth: "200px",
		backgroundColor: "#d3d3d34f",
		padding: "10px",
		margin: "5px",
		boxShadow: "1px 1px 1px 0px #302e2e4f",
		boxSizing: "border-box"
	};

	const containerStyle = {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: "10px"
	};

	const imgStyle = {
		width: "100%",
		height: "auto",
		display: "block"
	};
	return (
		<div>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<div style={containerStyle}>
				{users.map(user => (
					<div style={cardStyle}>
						<img
							src="https://w3schools.com/howto/img_avatar2.png"
							alt="profile"
							style={imgStyle}
						/>
						<h2>{user.name}</h2>
						<p>{user.role}</p>
					</div>
				))}


			</div>
		</div>
	)
}

export default App
