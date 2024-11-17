import React from 'react'
import { PUBLIC_ROUTES } from './routeConstants'

export const routesConfig = [
  {
    path: PUBLIC_ROUTES.ROOT,
    component: React.lazy(() => import('../../pages/cover/Cover')),
    protected: false,
  },
  {
    path: PUBLIC_ROUTES.HOME,
    component: React.lazy(() => import('../../pages/home/Home')),
    protected: true,
  },
  {
    path: PUBLIC_ROUTES.CHAT,
    component: React.lazy(() => import('../../pages/chat/Chat')),
    protected: true,
  },
]
