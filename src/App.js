import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import store from './store/index';
const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <Body />,
    children:[
      {
        path: "",
        element: <MainContainer />
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter}>
      <Outlet />
    </RouterProvider>
    </Provider>
  );
}

export default App;
