import mongoose from 'mongoose';

const toDoSchema = mongoose.Schema({
  todo: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('toDoSchema', toDoSchema);
