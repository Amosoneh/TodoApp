import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [input, setInput] = useState({
    title: "",
    description: ""
  });
  const [reminder, setReminder] = useState(false);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (input.title.trim === "") {
      alert("Please enter the title of your task");
      return;
    }

    onAdd({ ...input, reminder });
    setInput({
      title: "",
      description: ""
    });
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={formSubmitHandler}>
      <div className="form-control ">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={input.title}
          onChange={inputChangeHandler}
          placeholder="add title"
        />
      </div>

      <div className="form-control">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={input.description}
          onChange={inputChangeHandler}
          placeholder="add description"
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        className="btn btn-block"
        type="submit"
        onClick={formSubmitHandler}
        value="Add task"
      />
    </form>
  );
};
export default AddTask;
