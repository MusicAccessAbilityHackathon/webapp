import { Observable } from 'rxjs/Observable';
import { TemplateResult } from 'lit-html';

/**
 * This module defines a simple declarative application framework that utilizes `lit-html`, based on components and 
 * unidirectional data flow of "props".
 */

export type Component<P = {}> = (props: P) => TemplateResult;

export type AppState = {
  menuOpen: boolean;
};
export type Store = Observable<AppState>;
