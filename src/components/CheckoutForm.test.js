import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// INSTRUCTIONS
// ✅ Fill out code necessary to test that that Checkout form renders without errors.
// Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.

test("renders without errors", () => {
	render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {

});
