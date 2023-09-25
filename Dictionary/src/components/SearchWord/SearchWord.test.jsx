import SearchWord from "./SearchWord";
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

it("should render text when button is clicked", async () => {
    render(<SearchWord />)
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await userEvent.type(textbox, 'Hello');
    userEvent.click(button);
    expect(textbox).toHaveValue('Hello');
})

it("should display errormessage when button clicked with empty input", async () => {
    render(<SearchWord />)
    const button = screen.getByRole('button');

    await userEvent.click(button);
    expect(await screen.findByText("Please enter a word to search")).toBeInTheDocument()
})

it("should empty inputfield after searchbutton is clicked", async () => {
    render(<SearchWord />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole('button');
    const user = userEvent.setup();

    await user.type(input, "hello");
    expect(input).toHaveValue("hello");

    await user.click(button);
    expect(input).toHaveValue("");
  });


