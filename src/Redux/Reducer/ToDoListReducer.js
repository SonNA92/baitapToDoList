import { DarkTheme } from "../../Themes/DarkTheme";
import { LightTheme } from "../../Themes/LightTheme";
import { arrTheme } from "../../Themes/ThemeManager";
import { ADD_TASK, CHANGE_THEME, EDIT_TASK, SET_TASK, UPDATE_TASK } from "../Action/Types";

const initialState = {
    themeSelect: DarkTheme,
    taskList:[],

}

export const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        // tim theme duoc chon
        case CHANGE_THEME:{
            let theme = arrTheme.find(theme=>theme.id == action.themeId);
            if (theme){
                state.themeSelect = {...theme.theme};
                
            }
            return {...state};
        }
        case SET_TASK:{
            state.taskList = action.dataTask;
            return {...state};
        }
        case ADD_TASK:{
            state.taskList = [...state.taskList,action.dataTask];
            return {...state}
        }
        

    default:
        return {...state}
    }
}
