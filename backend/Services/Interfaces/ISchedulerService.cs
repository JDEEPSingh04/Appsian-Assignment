using Backend.DTOs.Tasks;

namespace Backend.Services.Interfaces
{
    public interface ISchedulerService
    {
        ScheduleResponseDto ScheduleTasks(ScheduleRequestDto request);
    }
}
