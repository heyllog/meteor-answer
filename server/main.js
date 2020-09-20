import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/tasks';

const pushNewTask = (taskText) => TasksCollection.insert({text: taskText});

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(task => pushNewTask(task))
  }
});
