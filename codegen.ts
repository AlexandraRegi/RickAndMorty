import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['src/**/*.gql'],
  generates: {
    './src/gql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {withHooks: true},
    },
  },
};

export default config;
