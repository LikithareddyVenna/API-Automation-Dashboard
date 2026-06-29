import { useState } from "react";

import PasswordInput from "./PasswordInput";

export default function ResetPasswordForm() {
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const nextErrors = {};
        const newPassword = formData.get("newPassword") ?? "";
        const confirmPassword = formData.get("confirmPassword") ?? "";

        if (newPassword.length < 8) {
            nextErrors.newPassword = "Password must be at least 8 characters.";
        }

        if (!confirmPassword) {
            nextErrors.confirmPassword = "Confirm Password is required.";
        } else if (newPassword !== confirmPassword) {
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
            <PasswordInput
                id="newPassword"
                name="newPassword"
                label="New Password"
                autoComplete="new-password"
            />
            {errors.newPassword && (
                <p className="-mt-3 text-sm text-red-600">{errors.newPassword}</p>
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
                Reset Password
            </button>
        </form>
    );
}
