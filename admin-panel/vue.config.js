const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ""
    ? `${process.env.APPDATA}/ASP.NET/https`
    : `${process.env.HOME}/.aspnet/https`;

const certificateArg = process.argv
  .map((arg) => arg.match(/--name=(?<value>.+)/i))
  .filter(Boolean)[0];
const certificateName = certificateArg ? certificateArg.groups.value : "bpmsUi";

if (!certificateName) {
  console.error(
    "Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly."
  );
  process.exit(-1);
}

const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    }
  },
  devServer: {
    server: {
      type: "https",
      options: {
        key: fs.readFileSync(keyFilePath),
        cert: fs.readFileSync(certFilePath)
      }
    },
    port: 5174,
    proxy: {
      "^/weatherforecast": {
        target: "https://localhost:5001/",
        secure: false
      }
    }
  }
});
