import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from "../components/Alert";
import ExpenseForm from "../components/ExpenseForm";
import Header from "../components/Header";
import ExpenseList from "../components/ExpenseList";

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

  test("test if values are being displayed on screen", () => {
    render(<Header />);

    const amount = screen.getAllByLabelText(/title/);
    expect(amount).toBe("Budget buddy");
  });

  test("checking if button works", () => {
    render(<ExpenseForm />);
  });
  test("Testing if amount is empty on load", () => {
    render(<ExpenseForm />);

    const amount = screen.getAllByLabelText(/amount/);
    expect(amount).toBe("");
  });

  test("testing if alert is displaying correctly on screen", async () => {
    render(<Alert />);
    render(<App />);
    // Click button
    fireEvent.click(screen.getByText("Load"));

    // Wait for page to update with query text
    const items = await screen.findAllByText(/Item #[0-9]: /);
    expect(items).toHaveLength(10);
  });
  test("testing for button render", async () => {
    render(<ExpenseList />);
    const amount = screen.getAllByLabelText(/clear/);
    expect(amount).toBe("");
  });
});
