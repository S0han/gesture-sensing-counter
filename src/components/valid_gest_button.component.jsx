export default function ValidGestButton({ valDetect }) {
    return (
        <button onClick={valDetect} className="px-6 py-3 bg-green-600 rounded">
            Valid
        </button>
    );
}