import { v4 as uuidv4 } from "uuid";

export default {
  Query: {
    votes: async (parent, { projectId }, { models }) => {
      return await models.Vote.findAll({ where: { projectId } });
    }
  },
  Mutation: {
    placeVote: async (
      parent,
      { projectId, firstName, lastName, score },
      { models }
    ) => {
      //id = uuidv4();
      const newVote = await models.Vote.create({
        projectId,
        firstName,
        lastName,
        score
      });
      return newVote;
    },

    updateVote: async (
      parent,
      { id, firstName, lastName, score },
      { models }
    ) => {
      await models.Vote.update(
        {
          firstName,
          lastName,
          score
        },
        {
          where: {
            id: id
          }
        }
      );
      const updatedVote = await models.Vote.findByPk(id, {});
      return updatedVote;
    },

    deleteVote: async (parent, { id }, { models }) => {
      const deletedVote = await models.Vote.destroy({
        where: {
          id
        }
      });
      return deletedVote;
    }
  }
};
