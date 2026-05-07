using task.management as tm from '../db/schema';

service TaskService {
  entity Employees as projection on tm.Employees;
  entity Projects as projection on tm.Projects;

  entity Tasks as projection on tm.Tasks
    actions {
      action completeTask();
    };
}