using Backend.DTOs.Projects;

namespace Backend.Services.Interfaces
{
    public interface IProjectService
    {
        Task<IEnumerable<ProjectResponseDto>> GetUserProjects(Guid userId);
        Task<ProjectResponseDto> GetProjectById(Guid projectId, Guid userId);
        Task<ProjectResponseDto> CreateProject(CreateProjectDto createDto, Guid userId);
        Task DeleteProject(Guid projectId, Guid userId);
    }
}
