import AuthCard from "../../components/auth/AuthCard";
import AuthFooter from "../../components/auth/AuthFooter";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <AuthCard
                title="Welcome Back 👋"
                subtitle="Sign in to continue to Dashboard"
            >
                <LoginForm />

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs font-medium uppercase text-slate-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <AuthFooter
                    text="Don't have an account?"
                    linkText="Create Account"
                    to="/register"
                />
            </AuthCard>
        </div>
    );
}
