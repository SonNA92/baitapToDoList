import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../Themes/DarkTheme';
import { LightTheme } from '../../Themes/LightTheme';
import { Container } from '../../Components/ComponentChild/Containers';
import { Dropdown } from '../../Components/ComponentChild/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../Components/ComponentChild/Heading';
import { Lable, TextField, Input } from '../../Components/ComponentChild/TextField';
import { Button } from '../../Components/ComponentChild/Button';
import { Table, Th, Thead, Tr, Td } from '../../Components/ComponentChild/Table';
import { useDispatch, useSelector } from 'react-redux';
import { arrTheme } from '../../Themes/ThemeManager';
import { CHANGE_THEME } from '../../Redux/Action/Types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addTaskAction, delTaskAction, doneTaskAction, getTaskListAction, rejectTaskAction } from '../../Redux/Action/ToDoListAction';




export default function ToDoList(props) {

    const dispatch = useDispatch();
    const { themeSelect, taskList} = useSelector(state => state.ToDoListReducer);

    // render Theme 
    const renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

    // Kiem tra Taskname
    const formik = useFormik({
        initialValues: {
            taskName: ''
        },
        validationSchema: Yup.object().shape({
            taskName: Yup.string().required('taskName không được bỏ trống')
        }),
        onSubmit: (values) => {
            if (values.taskName !== '') {
                // dua value len API
                dispatch(addTaskAction(values));
            } else {
                alert('Taskname không được bỏ trống! ');
            }
        },
    })

    // getTaskList
    useEffect(() => {
        dispatch(getTaskListAction());

    }, [])

    // render Task to do
    const renderTaskToDo = () => {
        return taskList?.filter(task => !task.status).map((task, index) => {
            return <Tr key={index}>
                <Th className="width:70%">{task.taskName}</Th>
                <Th className="text-right">
                    <Button type="button" onClick={() => {
                        checkTask(task.taskName);
                    }}><i className="fa fa-check"></i></Button>
                    <Button type="button" onClick={() => {
                        delTask(task.taskName);
                    }}><i className="fa fa-trash"></i></Button>
                </Th>
            </Tr>
        });
    }

    // render task Done
    const renderTaskComplete = () => {
        return taskList?.filter(task => task.status).map((task, index) => {
            return <Tr key={index}>
                <Th className="width:70%">{task.taskName}</Th>
                <Th className="text-right">
                    <Button type="button" onClick={() => {
                        delTask(task.taskName);
                    }}><i className="fa fa-trash"></i></Button>
                    <Button type="button" onClick={() => {
                        rejectTask(task.taskName);
                    }}><i className="fa fa-undo"></i></Button>
                </Th>
            </Tr>
        });
    }

    // Ham xu li DelTask
    const delTask = (taskName) => {
        dispatch(delTaskAction(taskName));
    }

    // Ham xu ly CheckTask
    const checkTask = (taskName) => {
        dispatch(doneTaskAction(taskName));
    }

    // Ham xu li RejectTask
    const rejectTask = (taskName) => {
        dispatch(rejectTaskAction(taskName));
    }

    // Render HTML
    return (
        <div style={{paddingBottom:'300px',background:'url(./img/anhnen.jpg)'}}>
            <ThemeProvider theme={themeSelect}>
                <Container style={{ width: '500px' }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Dropdown onChange={(e) => {
                            let { value } = e.target;
                            //dispatch value len reducer
                            dispatch({
                                type: CHANGE_THEME, 
                                themeId: value
                            })
                        }}>
                            {renderTheme()}
                        </Dropdown>
                        <Heading2>To Do List</Heading2>
                        <TextField lable="Task name" name="taskName" className="w-50" onChange={formik.handleChange} onBlur={formik.handleBlur} ></TextField>

                        <Button type="submit" className="ml-2"><i className="fa fa-plus"></i> Add Task</Button>

                        {formik.errors.taskName && formik.touched.taskName && <p className="text text-danger">{formik.errors.taskName}</p>}
                        <hr />
                        <Heading3>Task to do</Heading3>
                        <Table>
                            <Thead>
                                {renderTaskToDo()}
                            </Thead>
                        </Table>
                        <Heading3>Task Complete</Heading3>
                        <Table>
                            <Thead>
                                {renderTaskComplete()}
                            </Thead>
                        </Table>
                    </form>
                </Container>
            </ThemeProvider>
        </div>
    )
}
