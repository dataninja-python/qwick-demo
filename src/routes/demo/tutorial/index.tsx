import { component$, useStore } from "@builder.io/qwik";

import styles from "./tutorial.module.css";

export default component$(() => {
	return (
		<div class="tutorial-wrapper">
			<h1>Hello World!</h1>
			This is a static component. It never downloads to the client.
			<br />
			<button onClick$={() => alert("Hello")}>greet!</button>
			<hr />
			<Counter />
		</div>
	);
});

export const Counter = component$(() => {
	const store = useStore({ count: 0 });
	return (
		<>
			This is a dynamic component. Qwik will download me only when it is time to
			re-render user clicks on the <code>+1</code> button.
			<br />
			Current count: {store.count}
			<br />
			<button
				onClick$={() => {
					store.count++;
				}}
			>
				+1
			</button>
		</>
	);
});
