import {createOvermind} from 'overmind';
import {createActionsHook, createEffectsHook, createHook, createReactionHook, createStateHook} from 'overmind-react';
import state from './default-state';
import actions from './actions';
import effects from './effects';

const store = createOvermind({
    state,
    actions,
    effects,
});

export default store;
export const useStore = createHook();
export const useState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook()