import { registry } from '@/lib/registry';

export type RegistryComponent = {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
  files: {
    path: string;
    type: string;
  }[];
};
export function getRegistryComponent(
  name: keyof typeof registry,
): RegistryComponent {
  return registry[name];
}
