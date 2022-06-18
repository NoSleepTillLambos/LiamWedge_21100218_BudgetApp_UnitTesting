import SumForm from "../SumForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Testing our forms interaction", () => {
  // testing an example of rendering our component in the virtual dom
  // and selecting elements

  beforeEach(() => {
    render(<SumForm />);
    // console.log("consoled when test starts")
  });

  const typeInput = ({ inputOne, inputTwo }) => {
    const inputNumberOneElement = screen.getByLabelText(/numberOne/i);
    const inputNumberTwoElement = screen.getByLabelText(/numberTwo/i);

    if (inputOne) {
      userEvent.type(inputNumberOneElement, inputOne);
    }
    if (inputTwo) {
      userEvent.type(inputNumberTwoElement, inputTwo);
    }
    return {
      inputNumberOneElement,
      inputNumberTwoElement,
    };
  };

  afterAll(() => {
    console.log("performed after all the tests have run");
  });

  test("Make sure that our inputs are empty when the component is rendered", () => {
    typeInput({});

    // now that we have rhe element, check something with assertion
    expect(inputNumberOneElement.value).toBe("");
  });

  test("test if values are updated correctly", () => {
    render(<SumForm />);

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
});
