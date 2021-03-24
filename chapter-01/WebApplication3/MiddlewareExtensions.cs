using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomLogger(this IApplicationBuilder app)
        {
            return app.UseMiddleware<CustomLogger>();
        }
    }
}
