// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    reset:
      | 'done.invoke.checkForUpdate'
      | 'error.platform.checkForUpdate'
      | 'CHECK_FOR_UPDATE';
    assignUpdateAvailable: 'done.invoke.checkForUpdate';
    assignErrorMessage: 'error.platform.checkForUpdate';
  };
  internalEvents: {
    'done.invoke.checkForUpdate': {
      type: 'done.invoke.checkForUpdate';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.checkForUpdate': {
      type: 'error.platform.checkForUpdate';
      data: unknown;
    };
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    checkForUpdate: 'done.invoke.checkForUpdate';
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    checkForUpdate: 'CHECK_FOR_UPDATE';
  };
  eventsCausingGuards: {
    updateAvailable: '';
    updateNotAvailable: '';
  };
  eventsCausingDelays: {};
  matchesStates:
    | 'idle'
    | 'checkingForUpdate'
    | 'success'
    | 'failure'
    | 'updateAvailable';
  tags: never;
}
