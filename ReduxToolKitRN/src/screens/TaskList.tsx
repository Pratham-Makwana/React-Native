import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Touchable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, FAB, IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {
  addTask,
  deleteTask,
  fetchTasks,
  getAllTasks,
  getStatus,
  Task,
  toggleTask,
} from '../store/tasksSlice';
import Animated, {
  FadeInLeft,
  FadeInRight,
  Layout,
} from 'react-native-reanimated';

const TaskList = () => {
  const [isModalVisible, setIsModalVisibale] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  //   const allTask = useSelector((state : RootState) => state.tasks.tasks)
  const allTask = useSelector(getAllTasks);
  const status = useSelector(getStatus);
  //   const status = useSelector((state : RootState) => state.tasks.status)

  const handleDeleteTask = (taskId: string) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete task', [
      {
        text: 'cancle',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => dispatch(deleteTask(taskId)),
      },
    ]);
  };

  const handleAddNewTask = () => {
    dispatch(
      addTask({
        title: newTaskTitle.trim(),
        completed: false,
      }),
    );
    setNewTaskTitle('');
    setIsModalVisibale(false);
  };

  const createRenderTask = ({item}: {item: Task}) => {
    return (
      <Animated.View
        entering={FadeInLeft}
        exiting={FadeInRight}
        layout={Layout.springify()}>
        <TouchableOpacity onPress={() => dispatch(toggleTask(item.id))}
          style={[styles.taskItem, item.completed && styles.completedTaskItem]}>
          <Text
            style={[
              styles.taskItemText,
              item.completed && styles.completedTaskItemText,
            ]}>
            {item.title}
          </Text>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => handleDeleteTask(item.id)}>
            <Text style={styles.deleteBtntTxt}>Delete</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>
    );
  };



  useEffect(() => {
    if (status == 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={allTask}
        renderItem={createRenderTask}
        keyExtractor={Item => Item.id}
      />
      <FAB
        icon={'plus'}
        style={styles.fab}
        onPress={() => setIsModalVisibale(true)}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onDismiss={() => setIsModalVisibale(false)}>
        <KeyboardAvoidingView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Add New Task</Text>
              <IconButton
                icon="close"
                size={18}
                mode="contained"
                containerColor="red"
                iconColor="white"
                onPress={() => setIsModalVisibale(false)}
              />
            </View>
            <TextInput
              placeholder="task here"
              placeholderTextColor="#999999"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              style={styles.input}
              autoFocus
            />
            <View>
              <Button
                buttonColor="green"
                mode="contained"
                onPress={handleAddNewTask}>
                Add Task
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '90%',
    borderRadius: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#e0e0e0',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  modalBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  completedTaskItem: {
    opacity: 0.6,
  },
  taskItemText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  completedTaskItemText: {
    textDecorationLine: 'line-through',
  },
  deleteBtn: {
    padding: 12,
    backgroundColor: '#ba181b',
    borderRadius: 12,
  },
  deleteBtntTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
