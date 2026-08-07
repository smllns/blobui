import { registryFiles } from '../../lib/registryFiles';
import { getRegistryComponent } from './getRegistryComponent';

function findFileCode(path: string) {
  const key = Object.keys(registryFiles).find((file) => file.endsWith(path));
  return key ? registryFiles[key] : '';
}

export function getInstallation(
  name: Parameters<typeof getRegistryComponent>[0],
) {
  const component = getRegistryComponent(name);

  return {
    component: component.name,
    dependencies: component.dependencies,

    files: component.files.map((file) => ({
      path: file.path,
      code: findFileCode(file.path),
    })),
  };
}
