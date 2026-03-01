export default function ValidGestButton({ setIsValid }) {
    const handleClick = () => {
        console.log("valid gesture detected!")
        setIsValid(true);
    }
    
    return (
        <button onClick={handleClick} className="px-6 py-3 bg-green-600 rounded">
            Valid
        </button>
    );
}