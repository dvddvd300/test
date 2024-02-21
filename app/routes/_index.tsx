import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { json, useLoaderData } from '@remix-run/react';
import { Markdown } from '~/components';
import { parse } from '~/services/markdoc.server';

export async function loader({ context }: LoaderFunctionArgs) {
	return json(
		{
			content: '',
		},
		{
			headers: {
				'Cache-Control': 'public, max-age=3600',
			},
		},
	);
}

export default function Index() {
	const { content } = useLoaderData<typeof loader>();

	return <Markdown content={content} />;
}
