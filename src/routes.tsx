import React from "react";
import { Rocon } from "rocon/react";
import { DocsBuilderPath } from "./pages/docs/builder/Path";
import { DocsTop } from "./pages/docs/Top";
import { TopPage } from "./pages/TopPage";
import { TutorialBasicRouting } from "./pages/tutorial/BasicRouting";
import { TutorialDeepRoutes } from "./pages/tutorial/DeepRoutes";
import { TutorialDynamicRoutes } from "./pages/tutorial/DynamicRoutes";
import { TutorialExactRoute } from "./pages/tutorial/ExactRoute";
import { TutorialLocationState } from "./pages/tutorial/LocationState";
import { TutorialNavigation } from "./pages/tutorial/Navigation";
import { TutorialNested } from "./pages/tutorial/Nested";
import { TutorialNotFound } from "./pages/tutorial/NotFound";
import { TutorialQueryParameter } from "./pages/tutorial/QueryParameter";
import { TutorialTop } from "./pages/tutorial/Top";
import { TutorialUtilHooks } from "./pages/tutorial/UtilHooks";

// /tutorial
export const tutorialRoutes = Rocon.Path()
  .exact({
    action: () => <TutorialTop />,
  })
  .route("basic-routing", (r) => r.action(() => <TutorialBasicRouting />))
  .route("exact-route", (r) => r.action(() => <TutorialExactRoute />))
  .route("deep-routes", (r) => r.action(() => <TutorialDeepRoutes />))
  .route("dynamic-routes", (r) => r.action(() => <TutorialDynamicRoutes />))
  .route("navigation", (r) => r.action(() => <TutorialNavigation />))
  .route("not-found", (r) => r.action(() => <TutorialNotFound />))
  .route("query-parameter", (r) => r.action(() => <TutorialQueryParameter />))
  .route("location-state", (r) => r.action(() => <TutorialLocationState />))
  .route("util-hooks", (r) => r.action(() => <TutorialUtilHooks />))
  .route("nested", (r) => r.action(() => <TutorialNested />));

// /docs
export const docsRoutes = Rocon.Path()
  .exact({
    action: () => <DocsTop />,
  })
  .route("builder");

// /docs/builder
export const docsBuilderRoutes = docsRoutes._.builder
  .attach(Rocon.Path())
  .route("path", (r) => r.action(() => <DocsBuilderPath />));

export const toplevelRoutes = Rocon.Path()
  .exact({
    action: () => <TopPage />,
  })
  .route("tutorial", (p) => p.attach(tutorialRoutes))
  .route("docs", (p) => p.attach(docsRoutes));
