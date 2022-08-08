import { Artist, Project } from '../models';

export const resolvers = {
  Query: {
    // find all artists
    artists: async (parent, args, context) => {
      const artists = await Artist.find({})
        .populate('projects')
      return artists;
    },
    // find all projects
    projects: async (parent, args, context) => {
      const projects = await Project.find({})
        .populate('artists')
      return projects;
    },
    // find one artist
    artist: async (parent, { ID }, context) => {
      const artist = await Artist.findById(
        { _id: ID }
      ).populate('projects')
      return artist;
    },
    // find one project
    project: async (parent, { ID }, context) => {
      const project = await Project.findById(
        { _id: ID }
      ).populate('artists')
      return project;
    }
  }
}