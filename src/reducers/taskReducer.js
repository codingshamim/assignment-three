// Application Business Logic
export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "create_new_task": {
      // create new task
      return [...tasks, action.taskItem];
    }

    case "delete_all_task": {
      // delete all task
      return [];
    }
    case "delete_once": {
      // delete single task
      return tasks.filter((task) => task.id !== action.taskId);
    }
    case "update_task": {
      return tasks.map((task) => {
        if (task.id === action.taskItem.id) {
          return action.taskItem;
        } else {
          return task;
        }
      });
    }
    case "toggle_fav": {
      return tasks.map((task) => {
        if (task.id === action.taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      });
    }
  }
}
