import { input, select } from '@inquirer/prompts';
import { clone } from '../utils/clone';
import { name, version } from '../../package.json';
export interface TemplateInfo {
  name: string; // 模板名称
  downloadUrl: string; // 模板下载地址
  description: string; // 模板描述
  branch: string; // 模板分支
}

export const templates: Map<string, TemplateInfo> = new Map([
  [
    "Vite-Vue3-Typescript-tempalte",
    {
      name: "Vite-Vue3-Typescript-tempalte",
      downloadUrl: "git@gitee.com:sohucw/admin-pro.git",
      description: "Vue3技术栈开发模板",
      branch: "dev11",
    },
  ],
  [
    "Vite-Vue3-移动端模板",
    {
      name: "Vite-Vue3-Typescript-tempalte",
      downloadUrl: "git@gitee.com:sohucw/admin-pro.git",
      description: "Vue3技术栈开发模板",
      branch: "h5",
    },
  ],
]);

export async function create(projectName?: string) {
  // 初始化模板列表
  const templateList = Array.from(templates).map((item: [string, TemplateInfo]) => {
      const [name, info] = item;
      return {
          name,
          value: name,
          description: info.description,
      };
  });
  if (!projectName) {
      projectName = await input({ message: '请输入项目名称' });
  }


  const templateName = await select({
      message: '请选择模板',
      choices: templateList,
  });
  const info = templates.get(templateName);
  console.log(info);
  if (info) {
      clone(info.downloadUrl, projectName as string, ['-b', info.branch]);
  }

  console.log('create', projectName);
}   
