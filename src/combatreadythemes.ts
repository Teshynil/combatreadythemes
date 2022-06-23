import { registerLightMeter } from "./themes/light-meter/lightMeter";
import { registerVideoAnimation } from "./themes/video-animation/videoAnimation";

export function getCanvas(): Canvas {
	if (!(canvas instanceof Canvas) || !canvas.ready) {
		throw new Error('Canvas Is Not Initialized');
	}
	return canvas;
}

export function getGame(): Game {
	if (!(game instanceof Game)) {
		throw new Error('Game Is Not Initialized');
	}
	return game;
}

export function getCombats(): CombatEncounters {
	if (!(getGame().combats instanceof CombatEncounters)) {
		throw new Error('CombatEncounters Is Not Initialized');
	}
	return <CombatEncounters>getGame().combats;
}

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
	registerVideoAnimation(CombatReadyAnimationTheme);
});
//@ts-ignore
const gmodule = await import(`../../../../${ROUTE_PREFIX}/scripts/greensock/esm/all.js`);
export const gsap = gmodule.gsap;