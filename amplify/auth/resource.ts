import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  BucketItem: a
    .model({
      title: a.string(),
      description: a.string(),
      image: a.string(),
    })
    .authorization((allow) => [allow.owner()]), // Restrict access to the owner
});

export type Schema = ClientSchema<typeof schema>;

// Adjust the following to fit the intended purpose of `auth`
export const auth = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

