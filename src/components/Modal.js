import React from 'react';
import { PropTypes } from 'prop-types';

const Modal = ({ str, open, func }) => (
  <div className="px-44">
    <div className="bg-white py-10 px-24 rounded-lg space-y-10">
      <p className="primary-font text-xl text-center">{str}</p>
      <div className="justify-between flex flex-row">
        <button onClick={func} type="button" className="flex justify-center items-center rounded-lg p-5 w-32 bg-green-400">
          <p className="primary-font text-lg text-white">Ok</p>
        </button>
        <button onClick={() => open(false)} type="button" className="flex justify-center items-center rounded-lg p-5 w-32 bg-red-400">
          <p className="primary-font text-lg text-white">Cancel</p>
        </button>
      </div>
    </div>
  </div>
);

Modal.defaultProps = {
  str: [],
  open: () => {},
  func: () => {},
};

Modal.propTypes = ({
  str: PropTypes.node,
  open: PropTypes.func,
  func: PropTypes.func,
});

export default Modal;
