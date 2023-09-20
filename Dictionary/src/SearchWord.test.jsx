import SearchWord from "./components/SearchWord";
import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it("should be able to write in inputfield", async () => {
    render(<SearchWord />)
    const user = userEvent.setup();
    const input = screen.getByRole("textbox");
    await user.type(input, "test")
    expect(await screen.findByDisplayValue("test")).toBeInTheDocument() 
})

it("should render inputtext when button is clicked", async () => {
    render(<SearchWord />)
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    await userEvent.type(textbox, 'Hello');
    userEvent.click(button);
    expect(textbox).toHaveValue('Hello');
})

it("should display errormessage when button clicked without writing in input", async () => {
    render(<SearchWord />)
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(await screen.findByText("Please enter a word to search")).toBeInTheDocument()
})

//test att input ska vara tomt efter knapp
//test att errormeddelande ska visas vid tom sökning