# TODO - 后续开发计划

根据当前代码的完成情况，以下是建议的后续开发和优化计划，按优先级从高到低排列。

### 优先级：高

1.  **代码重构：分离数据与视图**
    *   **任务描述：** 将多个页面组件（如 `contribute/page.tsx`, `pathways/page.tsx`, `meeting/page.tsx`）中硬编码的数据（例如：角色列表、路径详情、FAQ问答等）抽离到单独的 `data/` 或 `constants/` 目录下的文件中。
    *   **目的：**
        *   使组件代码更简洁，专注于渲染逻辑。
        *   方便未来非开发人员（如内容管理员）更新文本或数据。
        *   提高代码的可维护性。
    *   **涉及文件：**
        *   `src/app/contribute/page.tsx`
        *   `src/app/pathways/page.tsx`
        *   `src/app/meeting/page.tsx`
        *   `src/app/faq/page.tsx`

### 优先级：中

2.  **UI 优化：统一图标风格**
    *   **任务描述：** 将目前广泛使用的 Emoji 图标替换为一套风格统一的 SVG 图标库（例如 `heroicons`, `lucide-react` 或自定义图标）。
    *   **目的：**
        *   提升网站整体视觉的专业性和一致性。
        *   确保在所有设备和浏览器上图标显示效果一致。
    *   **涉及文件：** 全站大部分页面和组件。

3.  **组件优化：创建可复用 UI 单元**
    *   **任务描述：** 识别项目中重复使用的 UI 模式（如带图标和描述的卡片、章节标题等），并将其封装成更细粒度的可复用组件。
    *   **目的：**
        *   减少代码重复。
        *   提高开发效率和代码一致性。
    *   **涉及文件：** 全站大部分页面。

### 优先级：低

4.  **部署准备：配置 GitHub Pages 发布**
    *   **任务描述：** 根据 PRD 文档，为项目添加 `next export` 配置，并设置 GitHub Actions 工作流，以实现自动化部署到 GitHub Pages。
    *   **目的：**
        *   实现持续集成与持续部署 (CI/CD)。
        *   将网站正式发布上线。
    *   **涉及文件：**
        *   `next.config.ts` (可能需要添加 `basePath` 和 `output: 'export'`)
        *   `.github/workflows/deploy.yml` (需要新建)
        *   `package.json` (可能需要添加 `export` 脚本)
