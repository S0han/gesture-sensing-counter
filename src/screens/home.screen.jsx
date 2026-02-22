import StartButton from "../components/start_button.component";

export default function Home({ setStart }) {
    return (
        <div className="flex h-screen items-center justify-center">
            <StartButton setStart={setStart} />
        </div>
    );
}