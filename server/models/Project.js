import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
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
  artists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist'
    }
  ]
});

const Project = mongoose.model('Project', projectSchema);

export default Project;