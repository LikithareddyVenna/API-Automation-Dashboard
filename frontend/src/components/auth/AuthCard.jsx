export default function AuthCard({ title, subtitle, children }) {
    return (
        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white px-8 py-9 shadow-sm">
            <div className="mb-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-600 text-lg font-bold text-white">
                    CL
                </div>
                <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
                <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
            </div>

            {children}
        </div>
    );
}
