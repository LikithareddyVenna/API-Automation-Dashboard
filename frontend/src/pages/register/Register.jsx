import AuthCard from "../../components/auth/AuthCard";
import AuthFooter from "../../components/auth/AuthFooter";
import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <AuthCard
                title="Create Account"
                subtitle="Sign up to get started with Dashboard"
            >
                <RegisterForm />

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs font-medium uppercase text-slate-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                <AuthFooter
                    text="Already have an account?"
                    linkText="Login"
                    to="/login"
                />
            </AuthCard>
        </div>
    );
}
