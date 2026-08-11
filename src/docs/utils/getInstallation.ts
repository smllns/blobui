import { registryFiles } from '../../lib/registryFiles';
import type { registry } from '../../lib/registry';
import { getRegistryComponent } from './getRegistryComponent';

function findFileCode(path: string) {
  const key = Object.keys(registryFiles).find((file) => file.endsWith(path));
  return key ? registryFiles[key] : '';
}

function collect(
  name: keyof typeof registry,
  seen = new Set<string>(),
): { path: string; type: string }[] {
  if (seen.has(name)) return [];
  seen.add(name);

  const component = getRegistryComponent(name);

  const fromDependencies = (component.registryDependencies ?? []).flatMap(
    (dependency) => collect(dependency as keyof typeof registry, seen),
  );

  return [...fromDependencies, ...component.files];
}

export function getInstallation(
  name: Parameters<typeof getRegistryComponent>[0],
) {
  const component = getRegistryComponent(name);

  const files = collect(name);
  const seenPaths = new Set<string>();

  return {
    component: component.name,
    dependencies: component.dependencies,

    files: files
      .filter((file) => {
        if (seenPaths.has(file.path)) return false;
        seenPaths.add(file.path);
        return true;
      })
      .map((file) => ({
        path: file.path,
        code: findFileCode(file.path),
      })),
  };
}
