import { useEffect, useState } from 'react';
import Clock from 'react-clock'
const LockScreen = ({setLoggedIn}) => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);
    return (
        <>
            <div id='lockscreen' className='w-screen h-screen z-10  backdrop-blur-xl'>
                <div className='h-full w-full flex flex-col justify-center items-center flex-wrap z-40'>
                    <Clock className='z-50 block' value={value} hourMarksWidth={3} hourMarksLength={10} size={200}/>
                    <p className='text-white text-3xl'>
                        session0
                    </p>
                </div>
            </div>
        </>
    )
}
export default LockScreen