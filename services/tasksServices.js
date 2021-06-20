import TaskModel from "../models/taskModel";
import Error from "../utils/Error";
import ErrorTypes from "../utils/ErrorTypes";

const create = async ({
  taskTitle,
  dueDateTask,
  description,
  responsible,
  collaborators,
}) => {
  try {
    const task = TaskModel({
        title: taskTitle,
        due_date: dueDateTask,
        description: description,
        responsible: responsible,
        collaborators: collaborators
    });
    await task.save();
    return task;
  } catch (error) {
    throw Error({
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error,
    });
  }
};

const detail = async (id) => {
  try {
    const task = await TaskModel.findById(id)
      .populate("responsible", "name email")
      .populate("collaborators", "name email")
      .exec();
    return task;
  } catch (error) {
    throw Error({
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error,
    });
  }
}

const getActiveTasks = async () => {
  const query = {
    status: [1, 2],
    due_date: {'$lt': new Date() }
  };
  try{

  } catch (error) {
    throw Error({
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error,
    });
  }
  const tasks = await TaskModel.find(query)
  .populate("responsible", "name email")
  .exec();
  return tasks;
};

const updateExpiredTasks = async (tasksIds) => {
  try{
    const ids = tasksIds.map(({id}) => {return id})
    await TaskModel.updateMany({_id: {$in: ids}}, {$set: {status: 3}}, {multi: true});
    return {update: "ok"}

  } catch (error) {
    throw Error({
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error,
    });
  }
};

const getAll = async ({ status, due_date_init, due_date_end }) => {
  try {
    // TODO: filtrar por el usuario responsable (token)
    const query = {};
    if (status) query['status'] = status;
    if (due_date_init && due_date_end) {
      query['due_date'] = { 
        '$gte': due_date_init, 
        '$lte': due_date_end 
      };
    }
    const tasks = await TaskModel.find(query)
      .populate("responsible", "name email")
      .populate("collaborators", "name email")
      .exec();
    return tasks;
  } catch (error) {
    throw Error({
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error,
    });
  }
}

const  updateStatus = async (id, status) => {
  try {
    /*const update = {
      "status": Number(status)
    };
    console.log('update', update)
    await TaskModel.findByIdAndUpdate(id, update);
    */
    const task = await TaskModel.findById(id);
    task.status = Number(status);
    await task.save();
    return { "update": "ok" };
  } catch (error) {
    throw Error({
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error,
    });
  }
}

export default {
  create,
  detail,
  getAll,
  updateStatus,
  getActiveTasks,
  updateExpiredTasks
};
