import { AuthLayout, SignIn, SignUp } from "../components/Auth";
import CocktailsLayout from "../components/Cocktails/CocktailsLayout";
import NotFound from "../components/NotFound/NotFound";
import CocktailsList from "../components/Cocktails/CocktailsList";

export const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const AppRoutes = [
  {
    path: "/",
    component: <div>Home Page component</div>,
    private: false,
    key: 1,
  },
  {
    path: "/auth",
    component: (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    ),
    private: false,
    key: 2,
  },
  {
    path: "/auth/register",
    component: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
    private: false,
    key: 3,
  },
  {
    path: "/cocktails",
    component: (
      <CocktailsLayout>
        <CocktailsList />
      </CocktailsLayout>
    ),
    private: true,
    key: 4,
  },
  {
    path: "*",
    component: <NotFound />,
    private: false,
    key: 5,
  },
];
