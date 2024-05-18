import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({

})

const List = mongoose.model('List', ListSchema);
export default List;