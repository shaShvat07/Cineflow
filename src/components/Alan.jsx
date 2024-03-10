import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';


const useAlan = () => {
    const { setMode } = useContext(ColorModeContext);

    useEffect(() => {
        alanBtn({
            key: '76b5d22d4006b59bac4b4ef40bbcd5ca2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, mode }) => {
                console.log(command, mode);
                if (command === 'changeMode') {
                    if (mode === 'light') {
                        setMode('light');
                    } else {
                        setMode('dark');
                    }
                }
                else if (command === 'login') {
                    fetchToken();
                }
                else if (command === 'logout') {
                    localStorage.clear();
                    window.location.href = '/';
                }
            }
        });
    }, []);
};

export default useAlan;