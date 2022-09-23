import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default ({ mode }) => {
    //动态获取环境变量中的api接口,不需要在该文件中手动设置(会自动使用对应的模式development or production)
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [react()],
        resolve: {
            //注意: 在这里加上别名后,请在tsconfig.json也加上对应的别名
            alias: {
                "@": resolve(__dirname, "src"),
                "@components": resolve(__dirname, "src/components"),
                "@views": resolve(__dirname, "src/views"),
                "@utils": resolve(__dirname, "src/utils"),
                "@service": resolve(__dirname, "src/service"),
                "@assets": resolve(__dirname, "src/assets"),
                "@store": resolve(__dirname, "src/store"),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "./src/assets/styles/init.scss";`, //添加公共样式
                },
            },
        },
        server: {
            port: 7087,
            open: false,
            strictPort: false, // 如果端⼝占⽤，是退出，还是尝试其他端⼝
            https: false,
            proxy: {
                "/api": {
                    target: process.env.VITE_API_URL, //需在env中配置VITE_API_URL
                    // target: 'http://jsonplaceholder.typicode.com',
                    // target: "http://localhost:7089", //接口域名（你请求的第三方接口）
                    ws: true, //是否代理 websockets
                    changeOrigin: true, //是否跨域 （虚拟的站点需要更管origin）
                    rewrite: (path) => path.replace(/^\/api/, ""), //路径重置
                },
            },
        },
    });
};
