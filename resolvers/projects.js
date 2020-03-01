import uuidv4 from "uuid/v4";

export default {
  Query: {
    projects: (parent, args, { models }) => {
      return Object.values(models.projects);
    },
    project: (parent, { id }, { models }) => {
      return models.projects[id];
    }
  },
  Mutation: {
    createNewProject: (parent, { name }, { models }) => {
      const id = uuidv4();
      const newProject = {
        id,
        name
      };
      models.projects[id] = newProject;
      return newProject;
    },

    deleteNote: (parent, { id }, { models }) => {
      const { [id]: project, ...otherProjects } = models.projects;
      if (!project) {
        return false;
      }
      models.projects = otherProjects;
      return true;
    }
  }
};
