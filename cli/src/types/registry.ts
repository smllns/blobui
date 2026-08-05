export type RegistryIndex = {
  components: {
    name: string;
    path: string;
  }[];
};

export type RegistryComponent = {
  name: string;
  type: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: {
    path: string;
    type: string;
  }[];
};
