const cds = require('@sap/cds');

module.exports = (srv) => {
  srv.before('CREATE', 'Tasks', (req) => {
    const task = req.data;

    if (!task.title) {
      req.error(400, 'Task title is required');
    }

    if (!task.status) {
      task.status = 'OPEN';
    }

    if (!task.priority) {
      task.priority = 'MEDIUM';
    }
  });

  srv.before(['CREATE', 'UPDATE'], 'Tasks', (req) => {
    const allowedStatuses = ['OPEN', 'IN_PROGRESS', 'DONE', 'BLOCKED'];
    const allowedPriorities = ['LOW', 'MEDIUM', 'HIGH'];

    if (req.data.status && !allowedStatuses.includes(req.data.status)) {
      req.error(400, `Invalid status: ${req.data.status}`);
    }

    if (req.data.priority && !allowedPriorities.includes(req.data.priority)) {
      req.error(400, `Invalid priority: ${req.data.priority}`);
    }
  });

  srv.on('completeTask', 'Tasks', async (req) => {
    const { ID } = req.params[0];

    await UPDATE('task.management.Tasks')
      .set({ status: 'DONE' })
      .where({ ID });

    return { message: 'Task completed successfully' };
  });
};