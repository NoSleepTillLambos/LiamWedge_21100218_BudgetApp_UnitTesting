import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from "../components/Alert";

describe("Testing the interaction of our forms", () => {
  // testing an example of rendering our component in the virtual dom
  // and selecting elements

  beforeEach(() => {
    render(<App />);
    // console.log("consoled when test starts")
  });

  afterAll(() => {
    console.log("performed after all the tests have run");
  });

  test("Make sure that our inputs are empty when the component is rendered", () => {
    typeInput({});

    // now that we have rhe element, check something with assertion
    expect(inputNumberOneElement.value).toBe("");
  });

  test("test if values are being displayed on screen", () => {
    render(<Alert />);

    // select our components
    const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
    const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i);

    // call our user events to interact with the components
    userEvent.type(inputNumberOneElement, "2");
    userEvent.type(inputNumberTwoElement, "4");

    // check if behaved as expected
    expect(inputNumberOneElement).toBe(2);
    expect(inputNumberTwoElement).toBe(4);
  });

  test("check if our button calc works", () => {
    const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
    const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i);

    // interact with our input elements
    userEvent.type(inputNumberOneElement, "2");
    userEvent.type(inputNumberTwoElement, "4");

    // query the button element
    const calculateButton = screen.getByRole("button", { name: /submit/i });

    // click on the button
    userEvent.click(calculateButton);

    // check if our calculation was successful
    const resultElement = screen.getByText("The sum is: ", { exact: false });

    // if this result element exists
    expect(resultElement).toBe("The sum is 6");
    expect(resultElement).toBeInTheDocument();
  });
  test("Testing if state is empty on load", () => {
    render(<App />);
  });

  test("testing if alert is displaying correctly on screen", async () => {
    render(<Alert />);

    // Click button
    fireEvent.click(screen.getByText("Load"));

    // Wait for page to update with query text
    const items = await screen.findAllByText(/Item #[0-9]: /);
    expect(items).toHaveLength(10);
  });
});
