export default function StatCard({ s }) {
    return (
        <div className="shadow-2xl rounded-2xl p-4 text-center">
            <h3 className="text-lg text-purple-900 font-bold">
                {s?.label}
            </h3>
            <p className="text-4xl text-purple-800 font-extrabold">
                {s?.value}
            </p>
        </div>
    )
}