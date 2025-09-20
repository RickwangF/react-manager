import {useState, useEffect} from "react";

export function useWindowSize() {

  const [size, setSize] = useState({width: window.document.documentElement.clientWidth, height: window.document.documentElement.clientHeight})

  const handleSizeChange = () => {
    setSize({width: window.document.documentElement.clientWidth, height: window.document.documentElement.clientHeight})
  }

  useEffect(() => {
    window.addEventListener('resize', handleSizeChange)
    return () => {
      window.removeEventListener('resize', handleSizeChange)
    }
  }, []);

  return [size]
}
