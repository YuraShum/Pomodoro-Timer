import up from './../up.png'
import back from './../back.png'
export default function Settings({name, time, changeTime}){
    const disabledButton = (time >=1 ? true: false)
    return(
        <div className="settings">
            <h2>{name} Length</h2>
            <div className='settings__param'>
                <button onClick={() => changeTime(prevValue => prevValue + 1)}>
                    <img src={up} alt='up'/>
                </button>
                <p>{time} min</p>
                {disabledButton ? <button  onClick= {() => changeTime(prevValue => prevValue -1)} > 
                    <img src={back} alt='back'/>
                </button>:
                <button  disabled > 
                    <img src={back} alt='back'/>
                </button>
                }
                
            </div>
        </div>
    )
}