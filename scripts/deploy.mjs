import { spawnSync } from "node:child_process";

const run = (command, args) => {
  const { CLOUDFLARE_API_TOKEN, ...env } = process.env;
  const executable = process.platform === "win32" ? "cmd.exe" : command;
  const executableArgs =
    process.platform === "win32" ? ["/d", "/s", "/c", command, ...args] : args;
  const result = spawnSync(executable, executableArgs, {
    env,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

run("npm", ["run", "build"]);
run("npx", ["wrangler", "deploy"]);
