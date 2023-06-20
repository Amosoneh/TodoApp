import Button from "./Button";
const Task = ({ task, onDelete, onToggle, id }) => {
  return (
    <div className="task">
      <h3
        style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.title}{" "}
        <span>
          <Button
            onClick={() => onToggle(id)}
            text={task.completed ? "Mark Uncompleted" : "Mark Completed"}
          />
          <Button onClick={() => onDelete(id)} text="Delete" color="red" />
        </span>
      </h3>
      <p>{task.description}</p>
      <span></span>
    </div>
  );
};

export default Task;
