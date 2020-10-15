using Gifter.Tests.Mocks;
using System;

namespace Gifter.Tests
{
    internal class PostController
    {
        private InMemoryPostRepository repo;

        public PostController(InMemoryPostRepository repo)
        {
            this.repo = repo;
        }

        internal void Post(Post newPost)
        {
            throw new NotImplementedException();
        }

        internal object Get(int testPostId)
        {
            throw new NotImplementedException();
        }

        internal object Get()
        {
            throw new NotImplementedException();
        }

        internal object Put(int someOtherPostId, Post postToUpdate)
        {
            throw new NotImplementedException();
        }

        internal void Delete(int testPostId)
        {
            throw new NotImplementedException();
        }
    }
}