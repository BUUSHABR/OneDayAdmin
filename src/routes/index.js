import RequireAuth from "../components/RequireAuth";
import Menu from "../pages/Menu";
import CreateMenu from "../pages/Menu/CreateMenu";
import EditMenu from "../pages/Menu/EditMenu";
import NotFoundPage from "../pages/error/NotFound";
import Login from "../pages/login";
import Register from "../pages/register";

let routes = [
    {
        path: '/',
        children:[
            { path: '/', element: <RequireAuth><Menu /></RequireAuth> }, // Set the login page as the default route
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'menu', element:
            <RequireAuth>
                <Menu />
            </RequireAuth>  },
            { path: 'editmenu/:id', element:
            <RequireAuth>
                <EditMenu />
            </RequireAuth>
        },        
        { path: 'createmenu', element:
        <RequireAuth>
            <CreateMenu />
        </RequireAuth>
    },        
            { path: '*', element: <NotFoundPage /> },
        ],
    }
]
export default routes;
