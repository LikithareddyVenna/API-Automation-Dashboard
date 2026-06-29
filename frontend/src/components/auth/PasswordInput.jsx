import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
    id = "password",
    name = "password",
    label = "Password",
    autoComplete = "current-password",
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-slate-700"
            >
                {label}
            </label>
            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    autoComplete={autoComplete}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-11 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
                <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((isShown) => !isShown)}
                    className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-slate-400 hover:text-slate-600"
                >
                    {showPassword ? (
                        <EyeOff size={18} aria-hidden="true" />
                    ) : (
                        <Eye size={18} aria-hidden="true" />
                    )}
                </button>
            </div>
        </div>
    );
}
