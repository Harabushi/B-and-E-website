import { Artist, Project } from '../models';

export const resolvers = {
  Query: {
    // find all artists
    artists: async (parent, args, context) => {
      const artists = await Artist.find({})
        .populate('projects')
      return artists;
    },
    projects: async (parent, args, context) => {
      const projects = await Project.find({})
        .populate('artists')
      return projects;
    },
    artist: async (parent, { ID }, context) => {
      const artist = await Artist.findById(
        { _id: ID }
      ).populate('projects')
      return artist;
    },
    project: async (parent, { ID }, context) => {
      const project = await Project.findById(
        { _id: ID }
      ).populate('artists')
      return project;
    }
  }
}