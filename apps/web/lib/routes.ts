const routes = {
  base: process.env.NEXT_PUBLIC_SITE_URL,
  error: "/error",
  home: "/",
  api: {
    auth: {
      callback: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  },
  auth: {
    signin: "/auth/sign-in",
    signup: "/auth/sign-up",
  },
  protected: {
    dashboard: "/dashboard",
    settings: "/dashboard/settings",
    project: (id: string) => `/project/${id}`,
  },
  resources: {
    api: "#",
    docs: "#",
    contact: "#",
    help: "#",
  },
};

export default routes;
