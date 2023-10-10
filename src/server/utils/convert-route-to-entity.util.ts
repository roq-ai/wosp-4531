const mapping: Record<string, string> = {
  charities: 'charity',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
