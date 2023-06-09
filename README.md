# Airbnb Clone -- all the features cloned from airbnb, greate practice project with Full stack usage in TypeScript

Live address at: https://travel-trips-f2t3sme8q-caspar2318.vercel.app/

---

This one will practice using newest version of app router, so we choose no for 'src' folder, but use 'app' folder instead. The problem will meet along the way is that react will confuse to use client component or server component. Inside app folder, most of them will be defaulted set as server component, so we need to define current component is client component by type "use client" at the top of each component code. Especially for those .tsx files which has used hooks.

---

Issue will be met as:

Since next 13 is new and 'app' folder is under experimental phase, so we'll met a problem as 'Unhandled Runtime Error' as a popup error, but the app is still able to run. This error comes from 'react-hydration-error'

Solutions: we can use 'useEffect' inside single tsx file to remove the error. Inside this project, a specific file as 'ClientOnly.tsx' is created inside app/component folder, and then go to app/layout.tsx file to wrap components by <ClientOnly> component.

---

=> to create app:

npx create-next-app --typescript

=> y => EsLint yes => tailwind CSS yes => `src/` No => `app/` yes => import alias (press enter)

---

Other packages need to install:

=> npm install react-icons zustand axios react-hook-form react-hot-toast query-string world-countries react-select react-leaflet next-cloudinary date-fns react-spinners

=> npm install -D prisma => npx prisma init

=> npm install next-auth @prima/client @next-auth/prisma-adapter bcrypt => npm install -D @types/bcrypt => npm install leaflet => npm install -D @types/leaflet => npm install react-date-range => npm install -D @types/react-date-range

---

Code in order as:

=> Navbar UI with login/register menu and avatar (Navbar, Avatar component and layout page)

=> Register UI (register modal, input, button etc. components, useRegisterModal hook, ToasterProvider )

=> Register function with prisma and mongoDB connection: 1.install prisma, modify models and relations inside "schema.prisma" file; 2.create mongodb project and user, paste link inside .env file with user and password of that database; 3.push prisma models to database by running command: npx prisma db push ; 4.create new folder as 'libs' inside app, create "prismadb.ts" file inside libs to declare prismadb as global and not re-render everytime by react

=> Login (account login and social sign in with google/github) 1.get client id and secret from github setting, developer setting page. To use the avatar of github, add "avatars.githubusercontent.com" inside "next.config.js" file; 2. google clound console, create new project, open new project, search "enabled api& services", create "OAuth consent screen" (External => name and email => "Credentials" => create OAuth client ID => web application => Authorized redirect URls: http//localhost:3000/api/auth/callback/google ); same image issue as github avatar met.

=> Categories UI with categories of properties setting

=> Categories functionalities: 1. category selection 2. location and map implement 3. Counter page for rooms and guests 4. upload images (using cloudinary, add cloudinary env variables inside .env, variable must start with formart as "NEXT*PUBLIC_CLOUDINARY*...", random named variables will not works) 5. description and price listing 6. submit the form to creat list

=> Listing: 1. create Listing UI to upload personal property to advertised it to Airbnb 2. fetch listing data from server side 3. favorite listing function 4. listing detail page 5. listing reservation function

=> Reservation: 1. reserve function through listing page 2. gray out the reserved date from selection range of date for reservation (getReservations.ts)

=> Add "My trips" (trips as a guest): 1. add trips page UI 2. add axios delete requested cancel reservation

=> Add "My reservations" page, similar with my trips page, but this is the reservations show for properties' owner, owner can also delete guest reservation here. those two pages shares same logic

=> Add "My favorites" page and logics

=> Add "My properties" page and logics

=> Search modal

=> small part fix: loader, add search title inside navbar...

---

deploy via Vercel.com, if met problem shows as 'Error: Error: Dynamic server usage: searchParams.userId" while deploying inside vercel. Solution as:

---

add one line inside page.tsx under app folder to make dynamic='force-dynamic'

export const dynamic='force-dynamic';

export default function Home(props: unknown) {
return (
<main>
<pre>
{JSON.stringify(props, null, 2)}
</pre>
</main>
)
}

---

Do not use words with Airbnb while deploying inside Vercel, than it can be report as fishing website after deployment.
