import React, { Component } from "react";
import { Modal } from "antd";

export default class EditModal extends Component {
	render() {
		
		
		const { visible, onOk, onCancel, error, str } = this.props;
		  return (
			<Modal title="" visible={visible} onCancel={onCancel} onOk={onOk}  >
					{error==="error" ? <h4>Не все поля были заполнены</h4> : <h4>{str}</h4>}
			</Modal>
		  );
	}
}
