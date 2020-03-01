import { v4 as uuidv4 } from "uuid";

export default {
  Query: {
    projects: async (parent, args, { models }) => {
      return await models.Note.findAll();
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

    updateProject: (parent, { id, name }, { models }) => {
      const updatedProject = {
        id,
        name
      };
      models.projects[id] = updatedProject;
      return updatedProject;
    },

    deleteProject: (parent, { id }, { models }) => {
      const { [id]: project, ...otherProjects } = models.projects;
      if (!project) {
        return false;
      }
      models.projects = otherProjects;
      return true;
    }
  }
};
