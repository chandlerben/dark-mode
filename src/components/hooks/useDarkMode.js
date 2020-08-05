import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';



const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', 'inital')


    useEffect(() => {
        const bodySelector = document.querySelector('body')
        darkMode ? bodySelector.classList.add('dark-mode') : bodySelector.classList.remove('dark-mode')
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode