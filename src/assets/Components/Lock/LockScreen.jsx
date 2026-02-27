import {useEffect, useRef, useState} from 'react';
import Clock from 'react-clock'
import {useNavigate} from 'react-router'
import gsap from 'gsap';

const LockScreen = ({setLoggedIn}) => {
    const [value, setValue] = useState(new Date());
    const lockblur = useRef(null);
    const lockscreen = useRef(null);
    const desktopWallpaper = useRef(null);
    const inputDRef = useRef(null)
    const inputRef = useRef(null)
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handlePassword = (e) => {
        const {value} = e.target
        setPassword(value);
    }

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    useEffect(() => {
        gsap.to('.passwordchar', {
            opacity: 1,
            duration: 0.05,
            ease: 'elastic.in',
            width: 12,
            height: 12,
        })
    }, [password])
    const authenticateSession = () => {
        setLoggedIn(true)

        if (setLoggedIn) {
            lockblur.current.classList.add('backdrop-blur-xl', 'scale-[110%]')
            setTimeout(() => {
                desktopWallpaper.current.classList.remove('opacity-0')
            }, 200);
            setTimeout(() => {
                navigate('/desktop')
            }, 300)
        }
    }
    return (
        <>
            <div id='lockscreen' ref={lockscreen}
                 className='w-screen h-screen relative z-10  backdrop-blur-xl overflow-hidden duration-500'>
                <div ref={lockblur}
                     className='h-full w-full flex flex-col justify-center items-center flex-wrap z-40 duration-500'>
                    <div className={'absolute top-1/4'}>
                        <Clock className='z-40 block absolute top-0' value={value} hourMarksWidth={3}
                               hourMarksLength={10} size={200}/>
                    </div>
                    <div className={'absolute top-1/2'}>
                        <p className='text-white text-center text-3xl jet'>
                            session0
                        </p>
                        <form action="" className={'relative h-16 w-auto mx-auto'}>
                            <div
                                className={'flex flex-row flex-wrap min-w-16 max-w-fit gap-0.5 duration-300 pt-10 px-5 left-0 text-2xl mx-auto text-white'}
                                ref={inputDRef}>
                                {
                                    password.split('').map((pass, i) => {
                                        return (
                                            <div key={i}
                                                 className={`w-0 h-0 aspect-square duration-300 my-auto opacity-0 bg-white rounded-full ${i === password.split('').length - 1 ? 'passwordchar' : ''}`}></div>
                                        )
                                    })
                                }
                            </div>
                            <input type="password"
                                   className={'min-w-16 focus-visible:outline-0 -translate-y-1/2 mx-auto max-w-fit mb-5 text-transparent text-2xl '}
                                   ref={inputRef} autoComplete={'true'} value={password} onChange={handlePassword}/>
                        </form>
                        <div onClick={authenticateSession}
                             className='text-white bg-zinc-900/10 rounded-xl backdrop-blur-xs hover:backdrop-blur-md hover:scale-105 font-bold tracking-wider z-50 text-2xl cursor-pointer mt-10 px-3 text-center py-3 duration-150 '>Login
                        </div>
                    </div>

                </div>
            </div>
            <div id="desktopWallpaper" ref={desktopWallpaper}
                 className='w-screen h-screen absolute top-0 left-0 desktopWallpaper z-50 scale-[110%] overflow-hidden overflow-x-hidden overflow-y-hidden pointer-events-none opacity-0 duration-200'>
                <div className='h-full w-full backdrop-blur-xl'></div>
            </div>
        </>
    )
}
export default LockScreen