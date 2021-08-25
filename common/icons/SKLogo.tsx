import React from 'react';

function SKLogo({ width }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 74.65 53.84'
      width={`${36 + width}`}>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <g id='Logo'>
            <g id='Skct_Logo1' data-name='Skct Logo1'>
              <path
                d='M0,17.16S10.25,49.5,35.5,53.84C35.5,53.84,30,25.42,0,17.16Z'
                fill='#f79421'
              />
              <path
                d='M38.37,53.84s7.17-30.9,36.28-36.68C74.65,17.16,68.25,46.82,38.37,53.84Z'
                fill='#f79421'
              />
              <ellipse cx='36.85' cy='5.83' rx='3.3' ry='3.1' fill='#f15b27' />
              <path
                d='M17.13,0V21.15s13.82,9,19.72,29.56c0,0,2.77-12.61,19.38-29.63L56.67,0S41.59,1.08,36.9,20.08C36.9,20.08,32.34.28,17.13,0Z'
                fill='#2baae2'
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export { SKLogo };
