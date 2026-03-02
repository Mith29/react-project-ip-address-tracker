

import { useEffect, useState } from "react";


export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState()


    const setStoredValue = (newValue) => {
        setValue(newValue)
        const stringifiedValue = JSON.stringify(newValue)
        localStorage.setItem(key, stringifiedValue)
    }

    useEffect(() => {
        const storedValue = localStorage.getItem(key)

        if (storedValue) {
            const parsed = JSON.parse(storedValue)
            setValue(parsed)
        } else {
            setStoredValue(initialValue)
        }

    }, [])

    return [value, setStoredValue]
}























