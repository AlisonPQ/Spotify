import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './app/context/AuthContext.tsx'
import { store, StoreContext } from './app/stores/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <StoreContext.Provider value={store}>
        <RouterProvider router={router} />
      </StoreContext.Provider>
    </AuthProvider>
  </StrictMode>,
)
