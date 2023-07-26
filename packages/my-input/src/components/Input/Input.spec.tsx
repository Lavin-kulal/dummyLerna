// /**
//  * @jest-environment jsdom
//  */

// import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { UpdaptInput } from ".";

// test("renders input", async () => {
//   render(<UpdaptInput testId="input" />);

//   const input = screen.getByTestId("input");

//   userEvent.type(input, "test string");

//   await waitFor(() => {
//     expect(screen.getByDisplayValue("test string")).toBeDefined();
//   });
// });
