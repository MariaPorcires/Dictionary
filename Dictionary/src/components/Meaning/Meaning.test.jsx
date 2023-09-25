import Meaning from "./Meaning";
import SearchWord from "../SearchWord/SearchWord";
import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it("should render definition of searched word", async () => {
    render(<SearchWord/>);
    render(<Meaning />)
    const user = userEvent.setup()
    const input = screen.getByRole("textbox");
    const button = screen.getByRole('button');

    await user.type(input, "computer");
    expect(input).toHaveValue("computer");
    
    await user.click(button);
    expect(await screen.findByText("Definition:")).toBeInTheDocument()
  })