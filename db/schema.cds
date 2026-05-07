namespace task.management;

entity Employees {
  key ID       : UUID;
  name         : String(100);
  email        : String(100);
  role         : String(50);
  tasks        : Association to many Tasks on tasks.assignee = $self;
}

entity Projects {
  key ID       : UUID;
  name         : String(100);
  description  : String(500);
  tasks        : Association to many Tasks on tasks.project = $self;
}

entity Tasks {
  key ID          : UUID;
  title           : String(150);
  description     : String(1000);
  status          : String(30);
  priority        : String(20);
  dueDate         : Date;
  assignee        : Association to Employees;
  project         : Association to Projects;
}