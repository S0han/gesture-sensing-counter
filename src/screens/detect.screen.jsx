// import ValidGestButton from '../components/valid_gest_button.component'; 
import GestureDetector from "../components/gesture_detector.component";

export default function Detect({ valDetect }) {
    return (
        <div className="flex h-screen items-center justify-center">
            {/* <ValidGestButton valDetect={valDetect} /> */}
            <GestureDetector />
        </div>
    );
}