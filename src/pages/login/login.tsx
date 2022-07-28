import { Header } from "../../components";
import { useEffect, useState, ChangeEvent, useContext } from "react"
import Storecontext, { AppContext } from "../../context/store"
import { toast } from "react-toastify"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [userInfo, setUserInfo] = useState([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
    }
    const auth = useContext(Storecontext)
    useEffect(() => {
        if (auth.user) {
            setUserInfo(auth.user)
            toast.success("Login Successful")
        }
    }, [auth.user])
    console.log(userInfo)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (email === "" || password === "") {
            setError("Please enter all fields")
            toast.error("Please enter all fields")
        } else {
            setError("")
            setEmail("")
            setPassword("")
            auth.login({ email: email, password: password })
        }

    }

    return (
        <>
            <Header />
            <div className="all-card">
                <div className="w-full">
                    <form className="rounded px-12 pt-6 pb-8 mb-4 ">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" onChange={handleChange} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" onChange={handleChange} />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                                Login
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Login;