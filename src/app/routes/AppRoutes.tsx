import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import { routesConfig } from './routesConfig'

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routesConfig.map(
          ({ path, component: Component, protected: isProtected }) =>
            isProtected ? (
              <Route key={path} element={<ProtectedRoutes />}>
                <Route path={path} element={<Component />} />
              </Route>
            ) : (
              <Route key={path} path={path} element={<Component />} />
            ),
        )}
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
