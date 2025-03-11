import { Routes, Route, Outlet } from "react-router-dom"
import { News } from "./pages/News"
import { Header } from "./components/layouts/Header"

const Layout = () => {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/news" element={<News />} />
            </Route>
        </Routes>
    )
}

export default App