import {Clock} from 'lucide-react'

export default function Header() {

    return(
        <div className='flex flex-row justify-center items-center gap-2 mt-8'>
            <Clock className='text-blue-500'/>
            <h1 className='text-blue-500 text-xl'>Pomodoro Timer</h1>
        </div>
    )
}