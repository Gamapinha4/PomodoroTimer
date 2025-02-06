
interface TimerProps {
    time: number
}

export default function Timer({time}: TimerProps) {

     let minutes = Math.floor(time / 60);
     let seconds = time % 60;

    return(
        <div className="flex justify-center mt-52">
            <h1 className="text-blue-500 font-bold text-[6rem] sm:text-[10rem] leading-relaxed">{`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h1>
        </div>
    )
}