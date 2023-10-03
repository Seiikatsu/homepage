import type {LinksFunction} from '@remix-run/node';
import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react';
import {H1, P} from 'app/components/text';
import tailwind from './tailwind.css';

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: tailwind},
];

export const ErrorBoundary = () => {
  const error = useRouteError();

  let content: JSX.Element | null;
  if (isRouteErrorResponse(error)) {
    content =
      error.status === 404 ? (
        <H1 noUnderline primary>
          {error.status}
          {error.statusText}
        </H1>
      ) : null;
  } else if (error instanceof Error) {
    content = (
      <>
        <H1 noUnderline primary>
          That should not have happened
        </H1>
      </>
    );
  } else {
    content = (
      <>
        <H1 noUnderline primary>
          We don't know what has happened
        </H1>
      </>
    );
  }


  return (
    <html lang="en">
    <head>
      <title>Oh no!</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <Meta/>
      <Links/>
    </head>
    <body className="bg-background">
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="font-bold text-text text-7xl [&p]:text-5xl">
        {content}
      </div>
      <Link to="/"><P>Return to Home Page</P></Link>
    </div>
    <Scripts/>
    </body>
    </html>
  );
};

export default function App() {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <Meta/>
      <Links/>
    </head>
    <body className="bg-background">
    <Outlet/>
    <ScrollRestoration/>
    <Scripts/>
    <LiveReload/>
    </body>
    </html>
  );
}
