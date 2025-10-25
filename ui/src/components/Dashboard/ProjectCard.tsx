import React from 'react'
import { Project } from '../../types/project.types'

interface Props {
  project: Project
  onDelete: (id: string) => void
  onClick: () => void
}

const ProjectCard: React.FC<Props> = ({ project, onDelete, onClick }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete(project.id)
  }

  const completionRate =
    project.taskCount > 0
      ? Math.round((project.completedTaskCount / project.taskCount) * 100)
      : 0

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-top">
        <div className="project-completion">
          <div className="completion-circle">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle"
                strokeDasharray={`${completionRate}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="percentage">{completionRate}%</div>
          </div>
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <div className="project-meta">
            <span className="meta-item">📅 {new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <button onClick={handleDelete} className="btn-delete" title="Delete project">×</button>
      </div>

      {project.description && (
        <p className="project-description">{project.description}</p>
      )}

      <div className="project-footer">
        <div className="footer-stat">
          <span className="stat-icon">📋</span>
          <div>
            <div className="stat-number">{project.taskCount}</div>
            <div className="stat-text">Total Tasks</div>
          </div>
        </div>
        <div className="footer-stat">
          <span className="stat-icon">✓</span>
          <div>
            <div className="stat-number">{project.completedTaskCount}</div>
            <div className="stat-text">Completed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
