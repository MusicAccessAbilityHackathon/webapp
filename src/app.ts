import { html, render } from 'lit-html/lib/lit-extended';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';

import { Component, Store, AppState } from './framework';
import { GooeyMenu } from './components/gooey-menu';

export const App: Component<AppProps> = () => {
  return html`<div>
    <div style="width: 100%; height: 100%;">
      ${GooeyMenu({})}
    </div>
  </div>`;
};

export const action = new Subject<AppState>();
export const store: Store = action.startWith({
  // TODO(alecmerdler): Define initial app state
  menuOpen: false,
});

store.subscribe((state) => {
  console.log(state);
  render(App({}), document.getElementById('app'));
});

export type AppProps = {};
