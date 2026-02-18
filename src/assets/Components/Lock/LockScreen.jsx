import { useEffect, useState } from 'react';
import Clock from 'react-clock'
import { useNavigate } from 'react-router'

const LockScreen = ({ setLoggedIn }) => {
    const [value, setValue] = useState(new Date());
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);
    const authenticateSession = () => {
        setLoggedIn(true)
        navigate('/desktop')
    }
    return (
        <>
            <div id='lockscreen' className='w-screen h-screen relative z-10  backdrop-blur-xl'>
                <div className='h-full w-full flex flex-col justify-center items-center flex-wrap z-40'>
                    <div className={'absolute top-1/4'}>
                        <Clock className='z-40 block absolute top-0' value={value} hourMarksWidth={3}
                            hourMarksLength={10} size={200} />
                    </div>
                    <div className={'absolute top-1/2'}>
                        <p className='text-white text-3xl jet'>
                            session0
                        </p>
                        <div onClick={authenticateSession} className='text-white bg-zinc-900/10 rounded-xl backdrop-blur-xs hover:backdrop-blur-md hover:scale-105 font-bold tracking-wider z-50 text-2xl cursor-pointer mt-10 px-3 text-center py-3 duration-150 '>Login</div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default LockScreen