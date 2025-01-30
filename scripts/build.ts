// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// interface Schema {
//   name: string;
//   type: "registry:ui";
//   registryDependencies: string[];
//   dependencies: string[];
//   devDependencies: string[];
//   tailwind: {
//     config?: Record<string, unknown>;
//   };
//   cssVars: {
//     light: Record<string, string>;
//     dark: Record<string, string>;
//   };
//   files: Array<{
//     path: string;
//     content: string;
//     type: "registry:ui";
//   }>;
// }

// type ComponentDefinition = Partial<
//   Pick<
//     Schema,
//     | "dependencies"
//     | "devDependencies"
//     | "registryDependencies"
//     | "cssVars"
//     | "tailwind"
//   >
// > & {
//   name: string;
//   path: string;
// };

// function readComponentFiles(directory: string): ComponentDefinition[] {
//   const components: ComponentDefinition[] = [];
//   const files = fs.readdirSync(directory);

//   for (const file of files) {
//     if (file.endsWith('.tsx')) {
//       const name = path.basename(file, '.tsx');
//       const componentPath = path.join(directory, file);
//       const content = fs.readFileSync(componentPath, 'utf8');
      
//       const dependencies = extractDependencies(content);
//       const registryDependencies = extractRegistryDependencies(content);
//       const cssVars = extractCssVars(content);
//       const tailwind = extractTailwindConfig(content);

//       components.push({
//         name,
//         path: componentPath,
//         dependencies,
//         registryDependencies,
//         cssVars,
//         tailwind,
//       });
//     }
//   }

//   return components;
// }

// function extractDependencies(content: string): string[] {
//   const importRegex = /import\s+(?:.+\s+from\s+)?['"](.+)['"]/g;
//   const matches = Array.from(content.matchAll(importRegex));
//   const dependencies = matches
//     .map(match => match[1])
//     .filter(dep => !dep.startsWith('.') && !dep.startsWith('@/'))
//     .map(dep => dep.split('/')[0]);
//   return Array.from(new Set(dependencies));
// }

// function extractRegistryDependencies(content: string): string[] {
//   const registryDependencyRegex = /\/\/ @registryDependencies: (.*)/;
//   const match = content.match(registryDependencyRegex);
//   return match ? match[1].split(',').map(d => d.trim()) : [];
// }

// function extractCssVars(content: string): Schema['cssVars'] {
//   const cssVarsRegex = /\/\/ @cssVars: (\{.*\})/;
//   const match = content.match(cssVarsRegex);
//   if (match) {
//     try {
//       return JSON.parse(match[1]);
//     } catch (error) {
//       console.warn(`Failed to parse CSS vars for component: ${error}`);
//     }
//   }
//   return {
//     light: {},
//     dark: {},
//   };
// }

// function extractTailwindConfig(content: string): Schema['tailwind'] {
//   const tailwindConfigRegex = /\/\/ @tailwindConfig: (\{.*\})/;
//   const match = content.match(tailwindConfigRegex);
//   if (match) {
//     try {
//       return JSON.parse(match[1]);
//     } catch (error) {
//       console.warn(`Failed to parse Tailwind config for component: ${error}`);
//     }
//   }
//   return {};
// }

// async function main() {
//   const easyuiDirectory = path.join(process.cwd(), "components/easyui");
//   const components = readComponentFiles(easyuiDirectory);

//   const registry = path.join(process.cwd(), "public/components-json");
//   if (!fs.existsSync(registry)) {
//     fs.mkdirSync(registry, { recursive: true });
//   }

//   for (const component of components) {
//     const content = await fs.promises.readFile(component.path, "utf8");

//     const schema: Schema = {
//       name: component.name,
//       type: "registry:ui",
//       registryDependencies: component.registryDependencies || [],
//       dependencies: component.dependencies || [],
//       devDependencies: component.devDependencies || [],
//       tailwind: component.tailwind || {},
//       cssVars: component.cssVars || {
//         light: {},
//         dark: {},
//       },
//       files: [
//         {
//           path: `${component.name}.tsx`,
//           content,
//           type: "registry:ui",
//         },
//       ],
//     };

//     await fs.promises.writeFile(
//       path.join(registry, `${component.name}.json`),
//       JSON.stringify(schema, null, 2)
//     );

//     console.log(`Generated registry file for ${component.name}`);
//   }

//   console.log("Registry build complete.");
// }

// main().catch(console.error);



import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Schema {
  name: string;
  type: "registry:ui";
  registryDependencies: string[];
  dependencies: string[];
  devDependencies: string[];
  tailwind: {
    config?: Record<string, unknown>;
  };
  cssVars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  files: Array<{
    path: string;
    content: string;
    type: "registry:ui";
  }>;
  install?: {
    before?: string[];
    after?: string[];
  };
}

type ComponentDefinition = Partial<
  Pick<
    Schema,
    | "dependencies"
    | "devDependencies"
    | "registryDependencies"
    | "cssVars"
    | "tailwind"
  >
> & {
  name: string;
  path: string;
};

function readComponentFiles(directory: string): ComponentDefinition[] {
  const components: ComponentDefinition[] = [];
  const files = fs.readdirSync(directory);

  for (const file of files) {
    if (file.endsWith('.tsx')) {
      const name = path.basename(file, '.tsx');
      const componentPath = path.join(directory, file);
      const content = fs.readFileSync(componentPath, 'utf8');
      
      const { dependencies, registryDependencies } = extractDependencies(content);
      const cssVars = extractCssVars(content);
      const tailwind = extractTailwindConfig(content);

      components.push({
        name,
        path: componentPath,
        dependencies,
        registryDependencies,
        cssVars,
        tailwind,
      });
    }
  }

  return components;
}

function extractDependencies(content: string): { dependencies: string[], registryDependencies: string[] } {
  const importRegex = /import\s+(?:{[^}]+}\s+from\s+)?['"](.+)['"]/g;
  const matches = Array.from(content.matchAll(importRegex));
  const dependencies: string[] = [];
  const registryDependencies: string[] = [];

  matches.forEach(match => {
    const importPath = match[1];
    if (importPath.startsWith('@/components/ui/') || importPath.startsWith('../ui/')) {
      const components = extractComponentsFromImport(match[0]);
      registryDependencies.push(...components);
    } else if (!importPath.startsWith('.') && !importPath.startsWith('@/')) {
      dependencies.push(importPath.split('/')[0]);
    }
  });

  const filteredDependencies = Array.from(new Set(dependencies)).filter(
    dep => !['react', 'react-dom'].includes(dep)
  );

  const filteredRegistryDependencies = Array.from(new Set(registryDependencies)).map(
    comp => comp.toLowerCase()
  );

  return {
    dependencies: filteredDependencies,
    registryDependencies: filteredRegistryDependencies
  };
}

function extractComponentsFromImport(importStatement: string): string[] {
  const components: string[] = [];
  const namedImportRegex = /{([^}]+)}/;
  const match = importStatement.match(namedImportRegex);
  
  if (match) {
    components.push(...match[1].split(',').map(c => c.trim()));
  } else {
    const defaultImportRegex = /import\s+(\w+)/;
    const defaultMatch = importStatement.match(defaultImportRegex);
    if (defaultMatch) {
      components.push(defaultMatch[1]);
    }
  }

  return components;
}

function extractCssVars(content: string): Schema['cssVars'] {
  const cssVarsRegex = /\/\/ @cssVars: (\{.*\})/;
  const match = content.match(cssVarsRegex);
  if (match) {
    try {
      return JSON.parse(match[1]);
    } catch (error) {
      console.warn(`Failed to parse CSS vars for component: ${error}`);
    }
  }
  return {
    light: {},
    dark: {},
  };
}

function extractTailwindConfig(content: string): Schema['tailwind'] {
  const tailwindConfigRegex = /\/\/ @tailwindConfig: (\{.*\})/;
  const match = content.match(tailwindConfigRegex);
  if (match) {
    try {
      return JSON.parse(match[1]);
    } catch (error) {
      console.warn(`Failed to parse Tailwind config for component: ${error}`);
    }
  }
  return {};
}

async function main() {
  const easyuiDirectory = path.join(process.cwd(), "components/easyui");
  const components = readComponentFiles(easyuiDirectory);

  const registry = path.join(process.cwd(), "public/components-json");
  if (!fs.existsSync(registry)) {
    fs.mkdirSync(registry, { recursive: true });
  }

  for (const component of components) {
    const content = await fs.promises.readFile(component.path, "utf8");

    const schema: Schema = {
      name: component.name,
      type: "registry:ui",
      registryDependencies: component.registryDependencies || [],
      dependencies: component.dependencies || [],
      devDependencies: [],
      tailwind: component.tailwind || {},
      cssVars: component.cssVars || {
        light: {},
        dark: {},
      },
      files: [
        {
          path: `${component.name}.tsx`,
          content,
          type: "registry:ui",
        },
      ],
      install: {
        before: component.registryDependencies?.map(dep => `npx shadcn@latest add ${dep}`) || [],
      },
    };

    await fs.promises.writeFile(
      path.join(registry, `${component.name}.json`),
      JSON.stringify(schema, null, 2)
    );

    console.log(`Generated registry file for ${component.name}`);
  }

  console.log("Registry build complete.");
}

main().catch(console.error);