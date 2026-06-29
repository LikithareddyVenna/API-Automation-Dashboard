import { Link } from "react-router-dom";

export default function AuthFooter({text, linkText, to,}) {
    return (
        <div className="text-center text-sm">
            <p className="text-slate-500">{text}</p>

            <Link
                to={to}
                className="mt-1 inline-block font-semibold text-indigo-600 hover:text-indigo-700"
            >
                {linkText}
            </Link>
        </div>
    );
}