import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.handleClearSelectedOption}
		contentLabel="Selected Option"
		closeTimeoutMS={300}
		className="modal-content"
	>
		<h3 className="modal__title">Remove Selected Option</h3>
		{props.selectedOption && (
			<p className="modal__body">{props.selectedOption}</p>
		)}
		<button className="button" onClick={props.handleClearSelectedOption}>
			Okay
		</button>
	</Modal>
);

export default OptionModal;
