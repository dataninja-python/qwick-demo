import { component$, $, useOn } from "@builder.io/qwik";

export default component$(() => {
	return <Alert />;
});

export const Alert = component$(() => {
	useOn(
		"click",
		$(() => alert("Hello World!")),
	);

	return <p>Alert: Click me.</p>;
});
