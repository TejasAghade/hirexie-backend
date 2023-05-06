const Schema = mongoose.Schema;
const documentSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  }
});
const Document = mongoose.model('Document', documentSchema);
