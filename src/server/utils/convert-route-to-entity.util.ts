const mapping: Record<string, string> = {
  inquiries: 'inquiry',
  inventories: 'inventory',
  organizations: 'organization',
  pillows: 'pillow',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
