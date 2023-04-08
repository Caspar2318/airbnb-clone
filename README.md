# Airbnb Clone -- all the features cloned from airbnb, greate practice project with Full stack usage in TypeScript

Live address at:

This one will practice using newest version of app router, so we choose no for 'src' folder, but use 'app' folder instead. The problem will meet along the way is that react will confuse to use client component or server component. Inside app folder, most of them will be defaulted set as server component, so we need to define current component is client component by type "use client" at the top of each component code.

Issue will be met as:

Since next 13 is new and 'app' folder is under experimental phase, so we'll met a problem as 'Unhandled Runtime Error' as a popup error, but the app is still able to run. This error comes from 'react-hydration-error'

Solutions: we can use 'useEffect' inside single tsx file to remove the error. In side this project, a specific file as 'ClientOnly.tsx' is created inside app/component folder, and then go to app/layout.tsx file to wrap components by <ClientOnly> component.

=> to create app:

npx create-next-app --typescript

=> y => EsLint yes => tailwind CSS yes => `src/` No => `app/` yes => import alias (press enter)

=> npm install react-icons
