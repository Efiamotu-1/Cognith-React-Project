import { render, screen } from "@testing-library/react"
import Home from "../pages/Home";

it('should render the same text in the home page', () => {
    render(<Home />);
    const welcomeText = screen.getByText("Welcome to Cognith's Home Page");
    expect(welcomeText).toBeInTheDocument();

})

it('should find the heading in the document', () => {
    render (<Home />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
})

it('should have a header title', () => {
    render(<Home />);
    const headerTitle = screen.getByTitle("Header")
    expect(headerTitle).toBeInTheDocument();
})

it('should have a header title', () => {
    render(<Home />);
    const headerTestId = screen.getByTestId("Header-1")
    expect(headerTestId).toBeInTheDocument();
})