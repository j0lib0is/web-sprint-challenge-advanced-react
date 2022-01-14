import React from "react";
import MutationObserver from 'mutationobserver-shim';

import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// INSTRUCTIONS
// ✅ Fill out code necessary to test that that Checkout form renders without errors.
// ✅ Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.

// Set up inputs
const firstnameInput = 'Luna';
const lastnameInput = 'Lovegood';
const addressInput = '1234 N Main St.';
const cityInput = 'Glendale';
const stateInput = 'Utah';
const zipInput = '84729';

test("renders without errors", () => {
	render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
	render(<CheckoutForm />);

	// Identify first name input and enter value
	const firstname = screen.queryByLabelText(/First Name/i);
	userEvent.type(firstname, firstnameInput);

	// Identify last name input and enter value
	const lastname = screen.queryByLabelText(/Last Name/i);
	userEvent.type(lastname, lastnameInput);

	// Identify address input and enter value
	const address = screen.queryByLabelText(/Address/i);
	userEvent.type(address, addressInput);

	// Identify city input and enter value
	const city = screen.queryByLabelText(/City/i);
	userEvent.type(city, cityInput);
	
	// Identify state input and enter value
	const state = screen.queryByLabelText(/State/i);
	userEvent.type(state, stateInput);

	// Identify zip code input and enter value
	const zip = screen.queryByLabelText(/Zip/i);
	userEvent.type(zip, zipInput);

	// Identify submit button and click
	const button = screen.getByRole('button');
	userEvent.click(button);

	// Identify output values and check if they exist
	const outputSuccess = screen.getByTestId('successMessage');
	expect(outputSuccess).toBeInTheDocument();

	const outputName = screen.getByText(`${firstnameInput} ${lastnameInput}`);
	expect(outputName).toBeInTheDocument();

	const outputAddress = screen.queryByText(addressInput);
	expect(outputAddress).toBeInTheDocument();
	
	const outputCityStateZip = screen.queryByText(`${cityInput}, ${stateInput} ${zipInput}`);
	expect(outputCityStateZip).toBeInTheDocument();
});
