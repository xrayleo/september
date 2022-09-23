/// <reference types="vite/client" />

//在这里配置和env文件对应的变量之后, 可以在使用时出现对应的提示信息
interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_API_URL: string;
}
