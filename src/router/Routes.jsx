import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import Apps from "../pages/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/appDetails/AppDetails";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children:[
        {
          path: "/",
          element: <Homepage></Homepage>,
          loader: ()=> fetch("/data.json")
        },
        {
          path: "/apps",
          element: <Apps></Apps>
        },
        {
            path: "/apps/:id",
            element: <AppDetails></AppDetails>
        },
        {
          path: "/installedApps",
          element: <InstallApps></InstallApps>
        }
      ],
      errorElement: <NotFoundPage></NotFoundPage>
    },
  ]
)