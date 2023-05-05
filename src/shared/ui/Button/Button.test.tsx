import {render, screen} from "@testing-library/react";
import {Button} from "shared/ui/Button/Button";

describe('button', () => {
    test('with one parameter', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    });
})