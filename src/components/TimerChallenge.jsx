import {useState, useRef} from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({title, targetTime})
{
    const timer = useRef();
    const dialog = useRef();
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);


    function handleStartButtonClick(){
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            //dialog.current.showModal();
            dialog.current?.showModal();
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleReStartButtonClick(){
        clearTimeout(timer.current);
        setTimerExpired(false);
        setTimerStarted(false);
        dialog.current.close();
    }

    return(
        <>
        <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
        <section className="challenge">
            <h2>{title}</h2>            
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's': '' }
            </p>
            <p>
                <button onClick={timerStarted ? handleReStartButtonClick : handleStartButtonClick}>
                    {timerStarted ? 'Restart' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerExpired ? 'Timer expired!' : timerStarted ? 'Timer is running...' : 'Timer inactive'}
            </p>
        </section>
        </>
    );
}