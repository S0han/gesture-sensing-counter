export default function StartButton({ setStart }) {
    const handleClick = () => {
        console.log("Clicked");
        setStart(true);
    }

    return (
        <button onClick={handleClick} className="px-6 py-3 bg-blue-600 text-white rounded">
            Start
        </button>
    );
}
