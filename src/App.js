import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import store from './store/index';
const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <Body />
  }
])
function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    </Provider>
  );
}

export default App;
