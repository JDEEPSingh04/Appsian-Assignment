using Backend.DTOs.Auth;

namespace Backend.Services.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponseDto> Register(RegisterDto registerDto);
        Task<AuthResponseDto> Login(LoginDto loginDto);
        string GenerateJwtToken(Guid userId, string username);
    }
}
