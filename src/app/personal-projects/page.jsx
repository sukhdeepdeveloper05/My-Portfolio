import projects from "@/data/projects";
import Project from "@/components/Project";

export const metadata = {
  title: "Personal Projects | Sukhdeep Sohal",
};

const sortedProjects = projects.sort((a, b) => {
  return b.year - a.year;
});

export default function PersonalProjectsPage() {
  return (
    <div className="py-8 mx-auto">
      <h1 className="text-center text-2xl md:text-4xl font-bold py-1 md:py-4 mb-4 md:mb-8">
        Personal Projects
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xl:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-8">
        {sortedProjects.map((project) => {
          return <Project project={project} key={project.title} />;
        })}
      </div>
    </div>
  );
}
