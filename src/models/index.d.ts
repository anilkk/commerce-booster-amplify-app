import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HeroBannerModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class HeroBannerModel {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly image?: string;
  readonly buttonText?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<HeroBannerModel, HeroBannerModelMetaData>);
  static copyOf(source: HeroBannerModel, mutator: (draft: MutableModel<HeroBannerModel, HeroBannerModelMetaData>) => MutableModel<HeroBannerModel, HeroBannerModelMetaData> | void): HeroBannerModel;
}