import React, { FC, useEffect, useState } from 'react';
import './Loading.scss';

type BorderProps = {
  loading: boolean
  duration: number
  width: string
}

export const Loading: FC<BorderProps> = ({ loading, duration, width }) => {
  const [loop, setLoop] = useState(loading ? 'infinite' : 1);
  const style: any = {
    '--border-width': `${width}`,
    '--border-color': `var(--color-accent)`,
    '--border-animation-delay': `${-duration / 2}s`,
    '--border-animation-duration': `${duration}s`,
    '--border-animation-loop': `${loop}`
  };
  
  const updateLoadingStopper = (e) => {
    loading || setLoop(e.elapsedTime / duration);
  };
  
  useEffect(() => setLoop(loading ? 'infinite' : loop));
  
  return <>
    <div style={style} className="border" onAnimationIteration={updateLoadingStopper} />
    <style jsx>{`

      @keyframes border {
        0% { /*================ Full Border ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% 0,)
        }
        12.5% { /*================ Remove TopLeft to TopRight ================*/
          clip-path: polygon(calc(100% - 1 * var(--border-width)) 0, calc(100% - var(--border-width)) var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% 0,)
        }
        25% { /*================ Remove TopRight to BottomRight ================*/
          clip-path: polygon(calc(100% - 1 * var(--border-width)) calc(100% - 1 * var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), 100% calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% calc(100% - var(--border-width)),)
        }
        37.5% { /*================ Remove BottomRight to BottomLeft ================*/
          clip-path: polygon(var(--border-width) calc(100% - 1 * var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 100%, var(--border-width) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, var(--border-width) 100%, var(--border-width) calc(100% - var(--border-width)),)
        }
        50% { /*================ Remove BottomLeft to TopLeft - Empty ================*/
          clip-path: polygon(var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, var(--border-width) 0, 0 0, var(--border-width) 0, var(--border-width) 0, 0 0, 0 0, var(--border-width) 0, var(--border-width) 0,)
        }
        51% { /*================ Empty ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 var(--border-width), 0 0,)
        }
        62.5% { /*================ TopLeft to TopRight ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) var(--border-width), 100% var(--border-width), 100% 0,)
        }
        75% { /*================ TopRight to BottomRight ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) calc(100% - var(--border-width)), calc(100% - var(--border-width)) 100%, 100% 100%, 100% 0,)
        }
        87.5% { /*================ BottomRight to BottomLeft ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), 0 100%, 100% 100%, 100% 0,)
        }
        100% { /*================ BottomLeft to TopLeft - Full Border ================*/
          clip-path: polygon(0 0, 0 var(--border-width), 100% var(--border-width), calc(100% - var(--border-width)) var(--border-width), calc(100% - var(--border-width)) 100%, calc(100% - var(--border-width)) calc(100% - var(--border-width)), 0 calc(100% - var(--border-width)), var(--border-width) calc(100% - var(--border-width)), var(--border-width) 0, 0 0, 0 100%, 100% 100%, 100% 0,)
        }
      }

      :global(:root) {
        --border-width: 6px;
        --border-color: linear-gradient(270deg,#f50a81 25.28%,#9d09db 59.7%,#f722c9 97.75%);
        --border-animation-delay: 2.5s;
        --border-animation-duration: 5s;
        --border-animation-loop: infinite;
      }

      .border {
        position: sticky;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        right: 0;
        min-height: 100vh;
        background: var(--border-color);
        animation-name: border;
        animation-duration: var(--border-animation-duration);
        animation-timing-function: linear;
        animation-delay: var(--border-animation-delay);
        animation-iteration-count: var(--border-animation-loop);
        animation-fill-mode: both;
      }
    
    `}</style>
  </>;
  
};



