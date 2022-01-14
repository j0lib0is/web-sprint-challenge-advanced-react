import { useState } from 'react';

// INSTRUCTIONS
// ✅ Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic.

const useForm = (initialValue) => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [values, setValues] = useState(initialValue);

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSuccessMessage(true);
	};

	return([showSuccessMessage, values, handleChanges, handleSubmit]);
}

export default useForm;