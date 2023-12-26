import { component$, useStore } from "@builder.io/qwik";
import styles from "./github.module.css";

export default component$(() => {
	const github = useStore({
		org: "BuilderIO",
		repos: ["qwik", "partytown"] as string[] | null,
	});

	return (
		<main>
			<p>
				<label>
					Github username:
					<input
						value={github.org}
						onInput$={(ev, el) => (github.org = el.value)}
					/>
				</label>
			</p>
			<section>
				{github.repos ? (
					<ul>
						{github.repos.map((repo) => (
							<li>
								<a href={`https://github.com/${github.org}/${repo}`}>
									{github.org}/{repo}
								</a>
							</li>
						))}
					</ul>
				) : (
					"loading..."
				)}
			</section>
		</main>
	);
});
