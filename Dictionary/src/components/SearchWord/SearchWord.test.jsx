import SearchWord from "./SearchWord";
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
//import { as } from "vitest/dist/reporters-cb94c88b";

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
    expect(await screen.findByText("Please Enter A Word To Search")).toBeInTheDocument()
})

it("should empty inputfield after searchbutton is clicked", async () => {
    render(<SearchWord />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole('button');
    const user = userEvent.setup();

    await user.type(input, "hello");
    expect(input).toHaveValue("hello");

    await user.click(button);
    await waitFor(() => expect(input).toHaveValue(""));
  });

/*   it("should render definition of searched word", async () => {
    render(<SearchWord/>);
    
    const user = userEvent.setup()
    const input = screen.getByRole("textbox");
    const button = screen.getByRole('button');

    await user.type(input, "computer");
    expect(input).toHaveValue("computer");
    
    await user.click(button);
    expect(await screen.findByText("Definition:")).toBeInTheDocument()
  })

  it("should render synonyms of searched word", async () => {
    render(<SearchWord />);

    const user = userEvent.setup()
    const input = screen.getByRole("textbox");
    const button = screen.getByRole('button');

    await user.type(input, "computer");
    expect(input).toHaveValue("computer");
    
    await user.click(button);
    expect(await screen.findByText("Synonyms:")).toBeInTheDocument
  })  */

 
