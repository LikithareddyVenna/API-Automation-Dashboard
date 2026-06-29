import { useState } from "react";

import PasswordInput from "./PasswordInput";

export default function RegisterForm() {
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const nextErrors = {};
        const fullName = formData.get("fullName")?.trim() ?? "";
        const email = formData.get("email")?.trim() ?? "";
        const password = formData.get("password") ?? "";
        const confirmPassword = formData.get("confirmPassword") ?? "";
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName) {
            nextErrors.fullName = "Full Name is required.";
        }

        if (!email) {
            nextErrors.email = "Email is required.";
        } else if (!emailPattern.test(email)) {
            nextErrors.email = "Enter a valid email address.";
        }

        if (password.length < 8) {
            nextErrors.password = "Password must be at least 8 characters.";
        }

        if (!confirmPassword) {
            nextErrors.confirmPassword = "Confirm Password is required.";
        } else if (password !== confirmPassword) {
            nextErrors.confirmPassword = "Passwords must match.";
        }

        return nextErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateForm(new FormData(event.currentTarget));
        setErrors(validationErrors);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
                <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                >
                    Full Name
                </label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
                {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
                )}
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
                {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
            </div>

            <PasswordInput autoComplete="new-password" />
            {errors.password && (
                <p className="-mt-3 text-sm text-red-600">{errors.password}</p>
            )}

            <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                autoComplete="new-password"
            />
            {errors.confirmPassword && (
                <p className="-mt-3 text-sm text-red-600">{errors.confirmPassword}</p>
            )}

            <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Create Account
            </button>
        </form>
    );
}
