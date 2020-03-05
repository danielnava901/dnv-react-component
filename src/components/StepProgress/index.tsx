import React from 'react';
import { StepProgressBar} from '../StyledComponents';

interface StepProgressPropsInterface {
    steps: any,
    current_step: number,
    last_step: number,
    onClickStep: (step: number) => void,
    finish?: boolean
}

const StepProgress: React.FC<StepProgressPropsInterface> = (props) => {

    return <StepProgressBar>
        {
            props.steps.map((step : any, index: number) => {

                let current = ((index + 1) === Number(props.current_step) ? 'current' : '');
                let active = ((index + 1) < Number(props.last_step) ? 'active' : '');
                let last_step = ((index + 1) === Number(props.last_step) ? 'last-step' : '');

                if(props.finish) {
                    last_step = "active";
                }

                return <div className="steps" key={index}>
                    <div
                         className={`step ${current} ${active} ${last_step}`}
                         onClick={() => {
                             if((index + 1) <= Number(props.last_step)) {
                                 props.onClickStep((index+1));
                             }
                         }}
                    >
                        {step.caption}
                    </div>
                    {
                        props.steps[index + 1] ? <div className="arrow">
                            &gt;
                        </div> : null
                    }
                </div>
            })
        }
    </StepProgressBar>
};

export default StepProgress;