import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default ({ mode }) => {
    return defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                "@imgs": path.resolve(__dirname, "./src/assets/images"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@pages": path.resolve(__dirname, "./src/pages"),
            },
        },
    });
};
