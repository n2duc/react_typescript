import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const UseContextExample = () => {
    const {state, dispatch} = useContext(ThemeContext);
    console.log(state);
    return (
        <div className='w-[200px] mt-5'>
            <button onClick={() => dispatch({ type: "CHANGE_THEME" })} className='w-full p-3 bg-violet-500 text-white'>Change Theme</button>
            <button onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: 20 })} className='w-full p-3 bg-blue-500 text-white'>Change Font Size</button>
        </div>
    )
}

export default UseContextExample