import React, { useEffect, useState } from 'react';
import './portals.css';
import Portal from './portal';
import Lane from './Lane';


// Make sure the path to your audio file is correct
const sound = new Audio(require('../sound effects/swoosh-sound-effect-for-fight-scenes-or-transitions-1-149889.mp3'));
const sound2 = new Audio(require('../sound effects/swoosh-sound-effect-for-fight-scenes-or-transitions-3-149888.mp3'));

export default function Portals({enable}) {
    const [state, setState] = useState({ left: false, right: false });
    const [newState, setNewState] = useState({ stat: false, width: '1' });
    

    useEffect(() => {
        if (state.left && state.right) {
            setNewState((prevState) => ({ ...prevState, stat: true }));
            setTimeout(() => {
                setNewState((prevState) => ({ ...prevState, width: '100' }));
                
                sound.play();
            }, 100);
        } else {
            setNewState((prevState) => ({ ...prevState, width: '1' }));
            sound2.play()
            setTimeout(() => {
                setNewState((prevState) => ({ ...prevState, stat: false }));
                
            }, 100);
        }
    }, [state]);

    const leftSelected = (e) => {
        e.preventDefault()
        setState((prevState) => ({ ...prevState, left: !prevState.left }));
    };

    const rightSelected = () => {
        setState((prevState) => ({ ...prevState, right: !prevState.right }));
    };

   
    return (
        
        
        <div style={{borderBlock:newState.width==='100'?'0.5px solid rgba(15, 84, 168, 0.817)':''}} className="horizontal-line line-space">
           <Lane newState={newState} visible={enable} />
           <Portal state={state.left} newState={newState} click={leftSelected} side='left' visible={enable}/>
           <Portal state={state.right} newState={newState} click={rightSelected} side='right' visible={enable}/>
        </div>

    
    );
}
