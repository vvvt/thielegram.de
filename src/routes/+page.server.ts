import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });
	const homepage = (await client.getByType('homepage')).results;
	const projects = (await client.getByType('project')).results;

	return { projects, homepage };
}
