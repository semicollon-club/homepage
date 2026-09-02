import { useEffect, useState, type ReactElement } from 'react'
import App from './App'
import OrganizationPage from './pages/OrganizationPage'
import { LOCATION_CHANGE_EVENT } from './lib/navigation'

const routes: Record<string, () => ReactElement> = {
  '/': App,
  '/organization': OrganizationPage,
}

function Router() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onChange = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onChange)
    window.addEventListener(LOCATION_CHANGE_EVENT, onChange)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener(LOCATION_CHANGE_EVENT, onChange)
    }
  }, [])

  const Page = routes[path] ?? App
  return <Page />
}

export default Router
