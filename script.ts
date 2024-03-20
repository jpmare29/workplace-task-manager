class Task {
    constructor(public id: number, public description: string, public completed: boolean = false) {}
}

class TaskManager {
    tasks: Task[] = [];
    currentId: number = 0;

    addTask(): void {

    }

    toggleTask(): void {

    }

    deleteTask(): void {
        
    }
}