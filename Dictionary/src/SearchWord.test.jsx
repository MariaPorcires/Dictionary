import SearchWord from "./components/SearchWord";
import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it("should be able to write in inputfield", async () => {
    render(<SearchWord />)
    const user = userEvent.setup();
    const input = screen.getByRole("textbox");
    await user.type(input, "test")
    expect(await screen.findByDisplayValue("test")).toBeInTheDocument() //findBy väntar in , anändare
})