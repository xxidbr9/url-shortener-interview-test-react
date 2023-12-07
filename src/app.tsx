import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import HomePage from '@/pages/home';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HomePage />
    <ReactQueryDevtools initialIsOpen={false} />
    <Toaster position="bottom-center" />
  </QueryClientProvider>
);

export default App;
