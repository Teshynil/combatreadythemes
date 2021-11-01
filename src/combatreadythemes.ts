import { registerLightMeter } from "./themes/light-meter/lightMeter";

/**
 * Ready hook
 */
Hooks.on("ready", function () {
  //@ts-ignore
  if (!(game.modules.get("combatready")?.active ?? false)) {
    ui?.notifications?.notify('Please make sure you have the "Combat Ready!" module installed and enabled.', "error");
  }
});
Hooks.on("combatready.ready", (CombatReadyAnimationTheme, CombatReadyTimer) => {
  registerLightMeter(CombatReadyTimer);
});