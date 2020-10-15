using System;

namespace Gifter.Tests
{
    internal class UserProfile
    {
        public string ImageUrl { get; internal set; }
        public DateTime DateCreated { get; internal set; }
        public string Bio { get; internal set; }
        public int Id { get; internal set; }
        public string Name { get; internal set; }
        public string Email { get; internal set; }
    }
}