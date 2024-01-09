import { lazy,Suspense } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import store from './store/index';
import Error from './components/Error';
import Shimmer from './components/Shimmer';
const MainContainer = lazy(()=>import('./components/MainContainer'));
const SearchVideoContainer = lazy(()=>import('./components/SearchVideoContainer'));
const WatchVideo = lazy(()=>import('./components/WatchVideo'));
const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <Body />,
    errorElement: <Error />,
    children:[
      {
        path: "",
        element: <Suspense fallback={<Shimmer />}>
          <MainContainer />
        </Suspense>
      },
      {
        path: "watch",
        element: <Suspense fallback={<p className='text-2xl font-bold text-center'>Loading...</p>}>
          <WatchVideo />
        </Suspense>
      },
      {
        path: "result",
        element: <Suspense fallback={<Shimmer search={true} />}>
          <SearchVideoContainer />
        </Suspense>
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
