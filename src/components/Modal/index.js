import React, { Component } from "react";
import { Modal } from "antd";

export default class EditModal extends Component {

	render() {	
		const { visible, onOk, onCancel, str, inputData } = this.props;
		  return (
			<Modal title="" visible={visible} onCancel={onCancel} onOk={onOk}  >
			<h4>{inputData ? str: "Данные введены не верно"}</h4>
			</Modal>
		  );
	}
}

