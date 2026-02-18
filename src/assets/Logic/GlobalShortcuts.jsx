import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function GlobalShortcuts() {

    const navigate = useNavigate();
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.altKey && e.key === 's') {
                localStorage.setItem(
                    'session0',
                    JSON.stringify({ CP: true })
                );
            }
            if (e.altKey && e.key === 'l') {
                navigate('/');
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    {
        ['/astronaut.png', '/car_on_mars.jpg', '/archicon.png', 'close.png', 'minimize.png', 'maximize.png'].map((url, index) => {
            let preloadImage = new Image();
            preloadImage.src = url
        })
    }
    return null;
}

export default GlobalShortcuts;
