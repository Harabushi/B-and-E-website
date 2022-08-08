import { model, Schema } from 'mongoose';
import { projectSchema } from './Project';

const artistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
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
  projects: [projectSchema]
});

export const Artist = model('Artist', artistSchema);