import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../App";
import "./css/Modal.css"

export default function Modal({id,title,description,category,status,toggleEdit,adding}) {
	const [currTitle, setTitle] = useState(title  || null)
	const [currDescription, setDescription] = useState(description || null)
	const [currCategory, setCategory] = useState(category || null) 
	const [currStatus, setStatus] = useState(status || null) 
	
	const {handleSave, columns} = useContext(Context)

	const handleConfirm = () => {
		toggleEdit()
		handleSave(id, currDescription,currTitle,currCategory,currStatus)
	}

	const handleClose = () => {
		toggleEdit()
	}

	const changeSelect = (e) => {
		setStatus(e.target.value)
	}

	return (
		<div className="modal">
			<div className="editBox">
				<h3>{adding ? "Add" : "Edit"}</h3>
				<input
					type={"text"}
					value={currTitle}
					placeholder = "Enter a title"
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<input
					type={"text"}
					value={currCategory}
					placeholder = {"Enter a category"}
					onChange={(e) => setCategory(e.target.value)}
				></input>
				<textarea
					value={currDescription}
					placeholder = "Enter a description"
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<select defaultValue={currStatus} 
						  onChange={changeSelect}
						  disabled = {adding}>
					{columns.map((el, i) => (
						<option key={i} value={el}>
							{el}
						</option>
					))}
				</select>
				<div className="btnContainer">
					<button
						onClick={() =>
							handleConfirm(
								id || null,
								currCategory,
								currDescription,
								currTitle,
								currStatus
							)
						}
					>
						{adding ? "Add" : "Save"}
					</button>
					<button onClick={handleClose}>Close</button>
				</div>
			</div>
		</div>
	);
}
