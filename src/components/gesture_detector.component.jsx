import { useRef, useEffect, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { FilesetResolver, GestureRecognizer } from '@mediapipe/tasks-vision';

export default function GestureDetector() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [gestureRecognizer, setGestureRecognizer] = useState(null);

    useEffect(() => {
        const initializeGestureRecognizer = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
            );

            const handRecognizer = await GestureRecognizer.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: "https://storage.googleapis.com/mediapipe-tasks/gesture_recognizer/gesture_recognizer.task",
                    },
                    runningMode: "VIDEO",
                    numHands: 1
                }
            );
            setGestureRecognizer(handRecognizer);
        };
        initializeGestureRecognizer();
    }, []);

    const onResults = useCallback((results) => {
        if (results.gestures.length > 0) {
            console.log(results.gestures[0][0].categoryName);
        }
    }, []);

    useEffect(() => {
        if (!gestureRecognizer) return;

        const startWebcam = () => {
            if (webcamRef.current) {
                const video = webcamRef.current.video;
                const performDetectionLoop = () => {
                    if (!video || video.readyState !== 4) {
                        requestAnimationFrame(performDetectionLoop);
                        return;
                    }

                    const nowInMs = Date.now();
                    const handResults = gestureRecognizer.recognizeForVideo(video, nowInMs);
                    onResults(handResults);

                    requestAnimationFrame(performDetectionLoop);
                };
                requestAnimationFrame(performDetectionLoop);
            }
        };

        startWebcam();
    }, [gestureRecognizer, onResults]);


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <Webcam
                    ref={webcamRef}
                    className="z-10"
                    style={{ width: 640, height: 480 }}
                />

                <canvas
                    ref={canvasRef}
                    width={640}
                    height={480}
                    className="absolute top-0 left-0 z-20"
                    style={{ width: 640, height: 480 }}
                />
            </div>
        </div>
    );
}