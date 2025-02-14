import {configureStore} from '@reduxjs/toolkit';
import TasksSlice from './tasksSlice';
import ProjectsSlice from './projectsSlice';

export const store = configureStore({
  reducer: {
    tasks: TasksSlice,
    projects: ProjectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
