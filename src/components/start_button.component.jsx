export default function StartButton({ onStart }) {
    return (
        <button onClick={onStart} className="px-6 py-3 bg-blue-600 text-white rounded">
            Start
        </button>
    );
}
