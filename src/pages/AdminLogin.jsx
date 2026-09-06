import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi"
import API from './../api/api';

function AdminLogin() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [otp, setOtp] = useState("")

    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError("")
        setMessage("")

        try {
            const response = await API.post("/api/admin/login", {
                email,
                password
            })

            if (response.data.success) {
                setMessage("OTP sent to your email")
                setStep(2)
            }
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Login failed"
            )
        } finally {
            setLoading(false)
        }
    }

    const handleVerifyOTP = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError("")
        setMessage("")

        try {
            const response = await API.post(
                "/api/admin/verify-otp",
                {
                    email,
                    otp
                }
            )

            if (response.data.success) {
                localStorage.setItem(
                    "adminToken",
                    response.data.token
                )

                navigate("/admin/dashboard")
            }
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Invalid OTP"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <div className="bg-white rounded-2xl shadow-xl p-8">

                    <div className="text-center mb-8">

                        <div className="w-16 h-16 bg-[#041a4f] rounded-2xl mx-auto flex items-center justify-center mb-4">

                            <HiOutlineLockClosed
                                className="text-white"
                                size={30}
                            />

                        </div>

                        <h1 className="text-2xl font-bold text-[#041a4f]">
                            Admin Panel
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Church Website Administration
                        </p>

                    </div>

                    {error && (
                        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm">
                            {error}
                        </div>
                    )}

                    {message && (
                        <div className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-600 px-4 py-3 text-sm">
                            {message}
                        </div>
                    )}

                    {step === 1 ? (

                        <form
                            onSubmit={handleLogin}
                            className="space-y-5"
                        >

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Admin Email
                                </label>

                                <div className="relative">

                                    <HiOutlineMail
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter admin email"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#041a4f]"
                                        required
                                    />

                                </div>

                            </div>

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>

                                <div className="relative">

                                    <HiOutlineLockClosed
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />

                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter password"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#041a4f]"
                                        required
                                    />

                                </div>

                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#041a4f] hover:bg-[#092968] text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
                            >
                                {loading
                                    ? "Sending OTP..."
                                    : "Login"}
                            </button>

                        </form>

                    ) : (

                        <form
                            onSubmit={handleVerifyOTP}
                            className="space-y-5"
                        >

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Enter OTP
                                </label>

                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) =>
                                        setOtp(e.target.value)
                                    }
                                    placeholder="Enter 6 digit OTP"
                                    maxLength={6}
                                    className="w-full text-center tracking-[.5em] text-xl py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#041a4f]"
                                    required
                                />

                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#041a4f] hover:bg-[#092968] text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
                            >
                                {loading
                                    ? "Verifying..."
                                    : "Verify OTP"}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setStep(1)
                                    setOtp("")
                                    setMessage("")
                                    setError("")
                                }}
                                className="w-full text-gray-500 text-sm hover:text-[#041a4f]"
                            >
                                Back to Login
                            </button>

                        </form>

                    )}

                </div>

            </div>

        </div>
    )
}

export default AdminLogin