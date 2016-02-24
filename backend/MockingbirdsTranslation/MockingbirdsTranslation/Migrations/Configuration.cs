namespace MockingbirdsTranslation.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using MockingbirdsTranslation.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<MockingbirdsTranslation.Models.MockingbirdsTranslationContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MockingbirdsTranslation.Models.MockingbirdsTranslationContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.Articles.AddOrUpdate(x => x.Id,
                    new Article() { Id = 1, Title="Mon premier article", Content="Ceci est le premier article de mon site!", PublishDate=DateTime.Now}
                );

        }
    }
}
