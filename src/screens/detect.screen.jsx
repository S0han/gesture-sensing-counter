import ValidGestButton from '../components/valid_gest_button.component'; 

export default function Detect({ setIsValid }) {
    return (
        <div className="flex h-screen items-center justify-center">
            <ValidGestButton setIsValid={setIsValid} />
        </div>
    );
}