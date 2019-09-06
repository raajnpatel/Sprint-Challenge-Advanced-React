import React, { useEffect }from 'react';

import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {

    const [someValue, setSomeValue] = useLocalStorage('mode');
    useEffect(()=>{
        if(someValue === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    },[someValue]);
    return [someValue,setSomeValue];
};

export default useDarkMode;