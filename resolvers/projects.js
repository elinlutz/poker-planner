import { v4 as uuidv4 } from "uuid";

export default {
  Query: {
    projects: async (parent, args, { models }) => {
      return await models.Project.findAll();
    },
    project: async (parent, { id }, { models }) => {
      return await models.Project.findByPk(id);
    }
  },
  Mutation: {
    createNewProject: async (parent, { name }, { models }) => {
      const newProject = await models.Project.create({ name });
      return newProject;
    },

    updateProject: async (parent, { id, name }, { models }) => {
      await models.Project.update(
        {
          name
        },
        {
          where: {
            id: id
          }
        }
      );
      const updatedProject = await models.Project.findByPk(id, {});
      return updatedProject;
    },

    deleteProject: async (parent, { id }, { models }) => {
      const deletedProject = await models.Project.destroy({
        where: {
          id
        }
      });
      return deletedProject;
    }
  }
};
