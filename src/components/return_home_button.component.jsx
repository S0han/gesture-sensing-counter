export default function ReturnHomeButton({ returnHome }) {
    return (
        <button onClick={returnHome} className="px-6 py-3 bg-red-600 rounded">
            Return Home
        </button>
    );
}