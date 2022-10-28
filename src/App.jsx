import "./App.css";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import tasks from "./API/api";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext(null);

function App() {
	const [data, setData] = useState(tasks);
	const columns = ["done", "in progress", "blocked", "todo"];

	const handleDelete = (id) => {
		setData((prev) => prev.filter((el) => el.id !== id));
	};

	const handleSave = (id, description, title, category, status) => {
		if (id) {
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
		} else {
			setData((prev) => {
				return [
					...prev,
					{
						id: Math.random(),
						description: description || "Nothing set",
						title: title || "Nothing set",
						category: category || "Nothing Set",
						status: status,
					},
				];
			});
		}
	};

	return (
		<div className="wrapper">
			{columns.map((column, i) => {
				return (
					<Context.Provider value={{ handleSave, columns }}>
						<TaskContainer
							key={i}
							onDelete={handleDelete}
							status={column}
							data={data.filter((el) => el.status === column)}
						/>
					</Context.Provider>
				);
			})}
		</div>
	);
}

export default App;
