import React from 'react'
import { Task } from '../../types/task.types'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[]
  onTaskUpdate: (taskId: string, updates: string[]) => void
  onTaskDelete: (taskId: string) => void
}

const TaskList: React.FC<Props> = ({ tasks, onTaskUpdate, onTaskDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add your first task to get started!</p>
      </div>
    )
  }

  const pendingTasks = tasks.filter((t) => !t.isCompleted)
  const completedTasks = tasks.filter((t) => t.isCompleted)

  return (
    <div className="task-list">
      {pendingTasks.length > 0 && (
        <div className="task-section">
          <h3>Pending Tasks ({pendingTasks.length})</h3>
          <div>
            {pendingTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdate={onTaskUpdate}
                onDelete={onTaskDelete}
              />
            ))}
          </div>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="task-section">
          <h3>Completed Tasks ({completedTasks.length})</h3>
          <div>
            {completedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdate={onTaskUpdate}
                onDelete={onTaskDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskList
