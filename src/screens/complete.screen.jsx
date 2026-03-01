import ReturnHomeButton from '../components/return_home_button.component';

export default function Complete({ returnHome }) {
    return (
        <div className="flex h-screen items-center justify-center">
            <ReturnHomeButton returnHome={returnHome} />
        </div>
    );
}