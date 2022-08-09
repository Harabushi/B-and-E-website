import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
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
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }
  ]
});

const Artist = mongoose.model('Artist', artistSchema);

export default Artist;