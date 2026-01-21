// TaskFlow - Team Task Management System
// Starter code for the Chaos Exercise

// Sample task data to show the structure
let tasks = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2025-10-15",
        assignedTo: "",
        completed: false
    }
];

// Function to render all tasks to the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');

        const today = new Date().toISOString().split('T')[0]; 
        let classes = 'card task-item';
        if (task.completed) classes += ' task-completed';
        if (task.dueDate < today) classes += ' task-overdue';
        taskItem.className = classes;
        
        taskItem.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <div class="task-description">${task.description}</div>
                        <div class="task-date">Due: ${task.dueDate}</div>
                        ${task.assignedTo ? `<div class="task-date">Assigned to: ${task.assignedTo}</div>` : ''}
                    </div>
                    <div class="task-actions">
                        <button class="btn btn-sm btn-outline-success"
                            onclick="toggleComplete(${task.id})">
                            complete
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        taskList.appendChild(taskItem);
    });
}

//toggle complete function
function toggleComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();
    
    document.getElementById('addTaskBtn').addEventListener('click', () => {
    tasks.push({
        id: tasks.length + 1,
        title: document.getElementById('taskTitle').value || "Untitled Task",
        description: "",
        dueDate: document.getElementById('taskDueDate').value,
        assignedTo: document.getElementById('taskAssignedTo').value,
        completed: false
    });

    renderTasks();
    });
});