import React, { useState } from "react";
import "./css/task.css"
import Modal from "../Modal/Modal";
export default function Task({id,title,description,category,status, handleDelete}) {
	const [onEdit, setOnEdit] = useState(false)

	const toggleEdit = () => {
		setOnEdit(!onEdit)
	}

  return (
	<div className = "taskBox">
		<h2>{title}</h2>
		<h4>{category}</h4>
		<p>{description}</p>
		<button className = "editBtn" 
				  onClick = { toggleEdit }>Edit</button>
		<button
				  className="removeBtn"
				  onClick = { () => handleDelete(id) }>Remove</button>
		{onEdit ? 
		<Modal title = {title} 
				 id = {id}
				 toggleEdit = {toggleEdit}
				 description = {description}
				 category = {category}
				 status = {status}
				 adding = {false}  />
		 : '' }
	</div>
  )
}
