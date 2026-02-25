import StartButton from "../components/start_button.component";

export default function Home({ onStart }) {
    return (
        <div className="flex h-screen items-center justify-center">
            <StartButton onStart={onStart} />
        </div>
    );
}