import React, { Component, Fragment } from 'react';

import { openModal, closeModal } from "@redq/reuse-modal"


const CloseComponent = () => {
  return <button onClick={() => closeModal()}>close </button>;
};

const BigModalComponent = props => (
  <Fragment>
    <h1>Modal </h1>
    <p>{props.customData}</p>
  </Fragment>
);

const Basic = () => {
  return (
    <div>
      <button
        onClick={() =>
          openModal({
            config: {
              className: 'customModal',
              disableDragging: false,
              enableResizing: {
                bottom: true,
                bottomLeft: true,
                bottomRight: true,
                left: true,
                right: true,
                top: true,
                topLeft: true,
                topRight: true,
              },
              width: 480,
              height: 650,
              animationFrom: { transform: 'scale(0.3)' }, // react-spring <Spring from={}> props value
              animationTo: { transform: 'scale(1)' }, //  react-spring <Spring to={}> props value
              transition: {
                mass: 1,
                tension: 130,
                friction: 26,
              }, // react-spring config props
            },
            withRnd: false,
        //    overlayClassName: 'customeOverlayClass',
            closeOnClickOutside: false,
            component: BigModalComponent,
            componentProps: { customData: 'your custom props' },
          })
        }
      >
        Open Modal
      </button>
    </div>
  );
};

export default Basic