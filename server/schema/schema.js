import {getSchema} from '@risingstack/graffiti-mongoose';
import schema from '../models';

const options = {
  allowMongoIDMutation: false
};

export default getSchema(schema, options);
