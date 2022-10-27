import "./App.css";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import tasks from "./API/api";
import { useState } from "react";
function App() {
	const [data, setData] = useState(tasks);
	const columns = ["done", "in progress", "blocked", "todo"];

	const handleEdit = (id, description, title, category, status) => {
		setData((prev) => {
			return prev.map((el) => {
				if (el.id === id) {
					el.description = description || el.description;
					el.title = title || el.title;
					el.category = category || el.category;
					el.status = status || el.status;
				}
				return el;
			});
		});
	};

	return (
		<div className="wrapper">
			{columns.map((column) => {
				return (
					<TaskContainer
						onEdit={handleEdit}
						columns={columns}
						status={column}
						data={data.filter((el) => el.status === column)}
					/>
				);
			})}
		</div>
	);
}

export default App;
