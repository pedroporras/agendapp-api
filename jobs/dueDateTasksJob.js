import cron from 'node-cron';
import tasksController from '../controllers/tasksCtrl';

cron.schedule('* * * * *', () => {
    console.log('cron executing...');
    tasksController.updateExpiredTasks();
});

export default cron;