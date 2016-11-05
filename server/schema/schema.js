import {getSchema} from '@risingstack/graffiti-mongoose';
import schema from '../models';

//can also add in hooks
/**
const hooks = {
    mutation: {
        pre: (next, todo, ...rest) => {
            if (todo.text) {
                todo.text = filter.clean(todo.text);
            }

            next(todo, ...rest);
        }
    }
};
 //getSchema(schema, options, hooks)
**/

const options = {
    allowMongoIDMutation: false
};

export default getSchema(schema, options);
