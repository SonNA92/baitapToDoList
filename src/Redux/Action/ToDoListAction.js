import axios from 'axios';
import { ADD_TASK, DEL_TASK, EDIT_TASK, SET_TASK, UPDATE_TASK } from './Types';




export const getTaskListAction = () => {
    return async (dispatch) => {
        try{
            const result = await axios({
                url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method:'GET'
            });
            // sau khi lay du lieu tu API ve gui len redux
            const action = {
                type: SET_TASK,
                dataTask: result.data   
            }
            dispatch(action);

        }catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const addTaskAction = (taskName) => {
    return async (dispatch) => {
        try{
            const result = await axios({
                url:'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method:'POST',
                data:taskName
            });
            // gui len redux
            const action = {
                type: ADD_TASK,
                dataTask: result.data   
            }
            dispatch(action);

        }catch (err) {
            console.log(err.response?.data);
            alert('Taskname không được trùng tên ');
        }
    }
}

export const delTaskAction = (taskName) => {
    return async (dispatch) => {
        try{
            const result = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
                method:'DELETE'
            });
            // sau khi xoa load lai trang
            dispatch(getTaskListAction());

        }catch (err) {
            console.log(err.response?.data)
        }
    }
}


export const doneTaskAction = (taskName) => {
    return async (dispatch) => {
        try{
            const result = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
                method:'PUT'
            });
            // sau khi check load lai trang
            dispatch(getTaskListAction());

        }catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const rejectTaskAction = (taskName) => {
    return async (dispatch) => {
        try{
            const result = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
                method:'PUT'
            });
            // sau khi check load lai trang
            dispatch(getTaskListAction());

        }catch (err) {
            console.log(err.response?.data)
        }
    }
}

