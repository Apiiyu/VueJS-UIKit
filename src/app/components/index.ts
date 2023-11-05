import type { App } from 'vue';

// Components
import { AppBaseFormGroup, AppBaseNavbar, AppBaseWrapper } from './base';

// Commons
import { AppCommonEntryPoint, AppCommonNotFound, AppCommonUnauthorized } from './common';

// Layouts
import { AppLayoutAuthentication, AppLayoutDefault, AppLayoutEmpty } from './layouts';

/**
 * @description Register all components
 */
export default (app: App): void => {
  /**
   * @description Auto load all components
   */
  // const listOfComponents: Record<string, () => Promise<unknown>> = import.meta.glob('./**/*.vue');

  // Base Components
  app.component('AppBaseFormGroup', AppBaseFormGroup);
  app.component('AppBaseNavbar', AppBaseNavbar);
  app.component('AppBaseWrapper', AppBaseWrapper);

  // Common components
  app.component('AppCommonEntryPoint', AppCommonEntryPoint);
  app.component('AppCommonNotFound', AppCommonNotFound);
  app.component('AppCommonUnauthorized', AppCommonUnauthorized);

  // Layout components
  app.component('AppLayoutAuthentication', AppLayoutAuthentication);
  app.component('AppLayoutDefault', AppLayoutDefault);
  app.component('AppLayoutEmpty', AppLayoutEmpty);
};
