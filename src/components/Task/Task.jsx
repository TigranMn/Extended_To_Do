import React, { useState } from "react";
import "./css/task.css"
export default function Task({id,title,description,category,status, columns, handleSave}) {
	const [onEdit, setOnEdit] = useState(false)
	const [currTitle, setTitle] = useState(title)
	const [currDescription, setDescription] = useState(description)
	const [currCategory, setCategory] = useState(category)
	const [currStatus, setStatus] = useState(status)

	const handleClick = () => {
		setOnEdit(false)
		handleSave(id, currDescription,currTitle,currCategory,currStatus)
	}

	const changeSelect = (e) => {
		setStatus(e.target.value)
	}

  return (
	<div className="taskBox">
		<h2>{currTitle}</h2>
		<h4>{currCategory}</h4>
		<p>{currDescription}</p>
		<button className="editBtn" 
				  onClick={() => setOnEdit(true)}>Edit</button>
		{onEdit ? 
		<div className="modal">
			<div className="editBox">
				<h1>Edit</h1>
				<input 
						type={'text'} 
						value = {currTitle} 
						onChange = {(e) => setTitle(e.target.value)}></input>
				<input 
						type={'text'} 
						value = {currCategory} 
						onChange = {(e) => setCategory(e.target.value)}></input>
				<textarea 
						value={currDescription} 
						onChange = {(e) => setDescription(e.target.value)}></textarea>
				<select 
						defaultValue={currStatus} 
						onChange={changeSelect}>
					{columns.map((el, i) => {
						return (
							<option  key={i} value={el}>{el}</option>
						)
					})}
				</select>
				<button onClick={() => handleClick(id, currCategory,currDescription,currTitle,currStatus)}>Save</button>
			</div>
		</div> : '' }
	</div>
  )
}
