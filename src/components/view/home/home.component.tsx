import * as React from 'react';
import { State } from '../../../state/state';
import { getState } from 'hyperwrap';
import { changeThing } from './change-thing.function';


interface Props {
    state?: State;
    actions?: { [key: string]: any }
}

const actionsCollection = {
    changeThing: changeThing
}

export const Home = (
    {state, actions}: Props = {
        state: getState(),
        actions: actionsCollection
    }
) => {
    const _state = state || getState();
    const _actions = actions || actionsCollection;
    return (
        <div>
            <p>{_state.thing}</p>
            <button onClick={(e) => {_actions.changeThing(e, 'bob')} }>push</button>
        </div>
    );
};