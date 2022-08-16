import React from 'react';
import styled from 'styled-components';

const LoadingSpinnerStyled = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 20px;
  height: 20px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <LoadingSpinnerStyled/>
        </div>
    );
}

export default LoadingSpinner;
