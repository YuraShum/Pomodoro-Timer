export default function Main({isStarting, setIsStarting, time, setSession, session, breakLength}){
    const second = 1;
    const minute = 60 * second;

    const minuteRes = Math.floor((time )/ minute);
    const secondRes = Math.floor((time) % minute);
    return(
        <main className="content">
            <div className="button__type--worck">
                <button onClick={() => setSession(true)} className = {session ? 'button__active': ''}>Session</button>
                <button onClick={() => setSession(false)} className = {session ? ' ': 'button__active'}>Break</button>
            </div>
            <h1 className="content__title">{session ? 'Session': 'Break'}</h1>

            <p className="content__time"> {minuteRes}:{secondRes >= 10 ? secondRes: `0${secondRes}`}</p>
            <div className="button__section">
                <button onClick={() => setIsStarting(prevValue => !prevValue)}>
                    {isStarting ? 'Stop': 'Start'}
                </button>
                <a href="./">
                    <button>Reset</button>
                </a>
            </div>
        </main>
    )
}