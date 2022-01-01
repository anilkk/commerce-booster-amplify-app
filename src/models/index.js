// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HeroBannerModel } = initSchema(schema);

export {
  HeroBannerModel
};