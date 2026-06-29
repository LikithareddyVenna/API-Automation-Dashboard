import { Link } from "react-router-dom";

import AuthCard from "../../components/auth/AuthCard";
import AuthFooter from "../../components/auth/AuthFooter";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <AuthCard
                title="Forgot Password?"
                subtitle="Enter your email address and we'll send you a password reset link."
            >
                <ForgotPasswordForm />

                {/* Temporary navigation for UI testing. Remove once backend integration is completed. */}
                <Link
                    to="/reset-password"
                    className="mt-4 block text-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                    Open Reset Password
                </Link>

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs font-medium uppercase text-slate-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <AuthFooter
                    text="Remember your password?"
                    linkText="Login"
                    to="/login"
                />
            </AuthCard>
        </div>
    );
}
