import { Fragment } from "react"
import {Header} from "../components"
function NotFound() {
    // return not found page with headers and message
    return (
        <>
        <Header />
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
        </>
    )
}
export default NotFound
