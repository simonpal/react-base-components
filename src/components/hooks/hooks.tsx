import { Dispatch, KeyboardEvent, SetStateAction, useCallback, useEffect, useState } from 'react'

export const useRoveFocus = (
  size: number,
  enabled: boolean,
): [number, Dispatch<SetStateAction<number>>] => {
  const [currentFocus, setCurrentFocus] = useState<number>(0)

  const handleKeyDown = useCallback(
    (e: any) => {
      if (!enabled) return
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault()
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault()
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
      }
    },
    [size, currentFocus, setCurrentFocus, enabled],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [handleKeyDown])

  return [currentFocus, setCurrentFocus]
}

export const useOutsideClick = (ref: any, cb: () => void) => {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target)) {
      cb()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

export const useDebouncedValue = (value: any | undefined, delay: number) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return undefined
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

type CookieOptions = {
  expires?: Date | number | string
  path?: string
  domain?: string
  secure?: boolean
}
const isBrowser = typeof window !== 'undefined'

export const setCookie = (name: string, value: any, options: CookieOptions) => {
  if (!isBrowser) return

  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options,
  }

  const expires = new Date(Date.now() + optionsWithDefaults.days * 864e5).toUTCString()

  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${
    optionsWithDefaults.path
  }`
}

export const getCookie = (name: string, initialValue = '') => {
  return (
    (isBrowser &&
      document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
      }, '')) ||
    initialValue
  )
}

export const useCookie = (key: string, initialValue: string) => {
  const [item, setItem] = useState(() => {
    return getCookie(key, initialValue)
  })

  const updateItem = (value: string, options: CookieOptions) => {
    setItem(value)
    setCookie(key, value, options)
  }

  return [item, updateItem]
}
