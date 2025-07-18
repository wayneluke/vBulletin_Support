/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ThemeToggle
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var ThemeToggle = class extends import_obsidian.Plugin {
  async onload() {
    this.ribbon = this.addRibbonIcon(this.getThemeIcon(), "Toggle to " + (this.getCurrentTheme() === "obsidian" ? "light" : "dark") + " mode", (evt) => {
      this.app.changeTheme(this.getCurrentTheme() === "obsidian" ? "moonstone" : "obsidian");
      (0, import_obsidian.setIcon)(evt.target, this.getThemeIcon());
      evt.target.setAttr("aria-label", "Toggle to " + (this.getCurrentTheme() === "obsidian" ? "light" : "dark") + " mode");
    });
    this.ribbon.addClass("ribbon-theme-toggle-plugin");
    this.registerEvent(
      this.app.workspace.on("css-change", () => {
        setTimeout(() => {
          (0, import_obsidian.setIcon)(this.ribbon, this.getCurrentTheme() === "obsidian" ? "sun" : "moon");
          this.ribbon.setAttr("aria-label", "Toggle to " + (this.getCurrentTheme() === "obsidian" ? "light" : "dark") + " mode");
        }, 10);
      })
    );
    this.addCommand({
      id: "toggle-theme",
      name: "Toggle theme",
      callback: () => {
        this.app.changeTheme(this.getCurrentTheme() === "obsidian" ? "moonstone" : "obsidian");
        (0, import_obsidian.setIcon)(this.ribbon, this.getCurrentTheme() === "obsidian" ? "sun" : "moon");
      }
    });
  }
  onunload() {
    this.ribbon.remove();
  }
  getCurrentTheme() {
    let currentTheme = this.app.getTheme() === "obsidian" ? "obsidian" : "moonstone";
    return currentTheme;
  }
  getThemeIcon() {
    let moonOrSunIcon = this.getCurrentTheme() === "obsidian" ? "sun" : "moon";
    return moonOrSunIcon;
  }
};

/* nosourcemap */