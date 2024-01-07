import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import store from './store/index';
import WatchVideo from './components/WatchVideo';
import SearchVideoContainer from './components/SearchVideoContainer';
const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <Body />,
    children:[
      {
        path: "",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchVideo />
      },
      {
        path: "result",
        element: <SearchVideoContainer />
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
