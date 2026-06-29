import AuthCard from "../../components/auth/AuthCard";
import AuthFooter from "../../components/auth/AuthFooter";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";

export default function ResetPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <AuthCard
                title="Reset Password"
                subtitle="Create a new password to secure your account."
            >
                <ResetPasswordForm />

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
