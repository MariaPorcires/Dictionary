import Phonetic from "./Phonetic";
import SearchWord from "../SearchWord/SearchWord";
import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it("should be able to play audio", async () => {
    render(<SearchWord/>);
    render(<Phonetic />)

    const user = userEvent.setup()
    const input = screen.getByRole("textbox");
    const button = screen.getByRole('button');

    await user.type(input, "computer");
    
    await user.click(button);
    expect(screen.getByTestId('audio')).toBeInTheDocument()
})