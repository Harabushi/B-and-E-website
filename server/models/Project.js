import { model, Schema } from 'mongoose';
import { artistSchema } from './Artist';

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
  genres: [
    {
      type: String
    },
  ],
  thumbnail: {
    type: String
  },
  images: [
    {
      type: String
    },
  ],
  links: [
    {
      type: String
    },
  ],
  // does this work or am I remembering it wrong
  artists: [artistSchema]
});

export const Project = model('Project', projectSchema);