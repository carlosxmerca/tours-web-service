export const TOURS_ENDPOINT = {
  root: "/tours",
  findAll: "/tours",
  findById: (id: string) => `/tours/${id}`,
  create: "/tours",
  like: (id: string) => `/tours/${id}/like`,
  delete: (id: string) => `/tours/${id}`,
  health: "/tours/health",
};
