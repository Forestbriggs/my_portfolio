import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './components/Layout'
import About from './pages/About/About'
import Project from './pages/Project/Project'
import Contact from './pages/Contact/Contact'


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Project />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '*',
                element: <Navigate to="/" replace />
            }
        ]
    }
])

function App() {

    return <RouterProvider router={router} />
}

export default App
