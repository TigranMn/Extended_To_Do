import React from "react";
import Task from "../Task/Task";
import "./css/TaskContainer.css";

export default function TaskContainer({ status, data, columns, onEdit }) {
	return (
		<>
			<div className="taskContainer">
				<h1>{status}</h1>
				{data.map((el) => {
					return (
						<Task
							id={el.id}
							key={el.id}
							columns={columns}
							status={el.status}
							description={el.description}
							title={el.title}
							category={el.category}
							handleSave={onEdit}
						/>
					);
				})}
			</div>
		</>
	);
}
