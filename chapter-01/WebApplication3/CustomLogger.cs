using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3
{
    public class CustomLogger
    {
        private readonly RequestDelegate _next;

        public CustomLogger(RequestDelegate next)
        {
            _next = next ?? throw new ArgumentNullException(nameof(next));
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if(httpContext == null) throw new ArgumentNullException(nameof(httpContext));
            
            Console.WriteLine($"Processing request for: \"{httpContext.Request.Path}\", scheme: {httpContext.Request.Scheme}...");
            await _next(httpContext);            
            Console.WriteLine($"done \"{httpContext.Request.Path}\".");
        }
    }
}
