import ValidGestButton from '../components/valid_gest_button.component';
import InvalidGestButton from '../components/invalid_gest_button.component'; 

export default function Detect() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex gap-2">
                <InvalidGestButton />
                <ValidGestButton />
            </div>
        </div>
    );
}