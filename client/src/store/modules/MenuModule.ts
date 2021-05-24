// import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
// import config, { AdMenu } from "@/config/SectionConfig";
//
// export interface Config {
//   config: Array<AdMenu>;
//   currentConfig: AdMenu | {};
// }
//
// export enum Mutations {
//   SET_CURRENT_CONFIG = "setCurrentConfig"
// }
//
// export enum Actions {
//   SET_CURRENT_CONFIG_ACTION = "setCurrentConfigAction"
// }
//
// @Module
// export default class MenuConfigModule extends VuexModule implements Config {
//   config = config;
//   currentConfig = {};
//
//   /**
//    * Get current menu config
//    * @returns AdMenu
//    */
//   get getCurrentConfig(): AdMenu | {} {
//     return this.currentConfig;
//   }
//
//   @Mutation
//   [Mutations.SET_CURRENT_CONFIG](config: AdMenu) {
//     this.currentConfig = config;
//   }
//
//   @Action
//   [Actions.SET_CURRENT_CONFIG_ACTION](newConfig: AdMenu) {
//     this.context.commit(Mutations.SET_CURRENT_CONFIG, newConfig);
//   }
// }
