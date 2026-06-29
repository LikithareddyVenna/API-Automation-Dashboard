import { useState } from "react";

export default function ForgotPasswordForm() {
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const nextErrors = {};
        const email = formData.get("email")?.trim() ?? "";
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            nextErrors.email = "Email is required.";
        } else if (!emailPattern.test(email)) {
            nextErrors.email = "Enter a valid email address.";
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

            <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Send Reset Link
            </button>
        </form>
    );
}
