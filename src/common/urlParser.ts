 import { matchPath } from "react-router";

export default function(location: any, url: string = '') {
  if (location && url !== '') {
    const match = matchPath(location.pathname, { path: url });

    return match && match.params;
  }

  if (location && url === '') {
    const route = location.pathname.split('/');

    return route[1];
  }

  return null;
}