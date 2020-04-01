using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }


        [Required]
        [StringLength(18, MinimumLength=4, 
            ErrorMessage = "You must enter a password between 4 and 18 characters!")]
        public string Password { get; set; }
    }
}