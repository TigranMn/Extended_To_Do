import React from "react";
import { useState } from "react";
import Task from "../Task/Task";
import "./css/TaskContainer.css";
import Modal from "../Modal/Modal";

export default function TaskContainer({ status, data, onDelete }) {

	const [isAdding, setIsAdding] = useState(false)

	const toggleAdding = () => {
		
		setIsAdding(!isAdding)
	}

	return (
		<>
			<div className="taskContainer">
				<h1>{status}</h1>
				<button onClick={toggleAdding}>
					Add
					<i class="fa-solid fa-plus"></i>
				</button>
				{isAdding ? <Modal status={status} adding toggleEdit={toggleAdding} ></Modal> : ''}
				{data.map((el) => {
					return (
						<Task
							id = {el.id}
							key = {el.id}
							status = {el.status}
							handleDelete = {onDelete}
							description = {el.description}
							title = {el.title}
							category = {el.category}
						/>
					);
				})}
			</div>
		</>
	);
}
