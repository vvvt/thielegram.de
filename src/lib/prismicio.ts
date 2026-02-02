import {
  createClient as baseClient,
  type Route,
} from "@prismicio/client";
import {
  enableAutoPreviews,
  type CreateClientConfig,
} from "@prismicio/svelte/kit";

// TODO: Update with your route resolvers.
const routes: Array<Route> = [
  { type: "homepage", path: "/" },
  { type: "project", path: "/work" },
  { type: "project", path: "/work/:uid" },
];

const repositoryName = 'thielegramde'

export function createClient({ cookies, ...config }: CreateClientConfig = {}) {
  const client = baseClient(repositoryName, {
    routes,
    ...config,
  });

  enableAutoPreviews({ client, cookies });

  return client;
}
