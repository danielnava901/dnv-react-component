import React from 'react';
import { StepProgressBar } from '../StyledComponents';

interface StepProgressPropsInterface {
  steps: any;
  current_step: number;
  last_step: number;
  onClickStep: (step: number) => void;
  finish?: boolean;
}

const StepProgress: React.FC<StepProgressPropsInterface> = props => {
  return (
    <StepProgressBar>
      {props.steps.map((step: any, index: number) => {
        const current = index + 1 === Number(props.current_step) ? 'current' : '';
        const active = index + 1 < Number(props.last_step) ? 'active' : '';
        let lastStep = index + 1 === Number(props.last_step) ? 'last-step' : '';

        if (props.finish) {
          lastStep = 'active';
        }

        return (
          <div className="steps" key={index}>
            <div
              className={`step ${current} ${active} ${lastStep}`}
              onClick={() => {
                if (index + 1 <= Number(props.last_step)) {
                  props.onClickStep(index + 1);
                }
              }}
            >
              {step.caption}
            </div>
            {props.steps[index + 1] ? <div className="arrow">&gt;</div> : null}
          </div>
        );
      })}
    </StepProgressBar>
  );
};

export default StepProgress;
