import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {render(<CheckoutForm />)});
                
test("form shows success message on submit with form details", () => {


    render(<CheckoutForm />);
    const firstname = screen.getByLabelText(/First Name/i)
    const lastname = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
   
    userEvent.type(firstname,"Jesse");
    userEvent.type(lastname,"Johns");
    userEvent.type(address,"Waka");
    userEvent.type(city,"shaka");
    userEvent.type(state,"fl");
    userEvent.type(zip,"12345");
    userEvent.click(screen.getByRole("button"));

    const message = screen.getByTestId("successMessage")
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent("Jesse")
    expect(message).toHaveTextContent("Johns")
    expect(message).toHaveTextContent("Waka")
    expect(message).toHaveTextContent("shaka")
    expect(message).toHaveTextContent("fl")
    expect(message).toHaveTextContent("12345")
});
