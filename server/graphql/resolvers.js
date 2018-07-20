// Imports: MongoDB Models/Schema
import BOOKSCHEMA from '../mongoose/bookschema.js';
import AUTHORSCHEMA from '../mongoose/authorschema.js';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    book(parent, args) {
      return BOOKSCHEMA.findById(args.id);
    },
    books() {
      return BOOKSCHEMA.find();
    },
    author(parent, args) {
      return AUTHORSCHEMA.findById(args.id)
    },
    authors() {
      return AUTHORSCHEMA.find();
    }
  },
  Mutation: {
    addBook(parent, args) {
      // Create new instance
      let book = new BOOKSCHEMA({
        name: args.name,
        genre: args.genre,
        authorId: args.authorId
      });
      
      // Save new instance
      return book.save();
    },
    addAuthor(parent, args) {
      // Create new instance
      let author = new AUTHORSCHEMA({
        name: args.name,
        age: args.age
      });

      // Save new instance
      return author.save();
    }
  }
}


// Exports
export default RESOLVERS;