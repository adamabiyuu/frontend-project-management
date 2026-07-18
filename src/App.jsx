import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import {
  createBrowserRouter, Link, RouterProvider
} from 'react-router'
import Table from './components/ui/Table';

const theme = createTheme({
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
  });

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Table columns={[
        {
          id: 'tugas',
          label: 'Tugas',
        },
        {
          id: 'status',
          label: 'Status',
        }
      ]} data={[
        {
          id: 1,
          tugas: 'Tugas 1',
          status: 'Belum Selesai',
        },
        {
          id: 2,
          tugas: 'Tugas 2',
          status: 'Belum Selesai',
        },
        {
          id: 3,
          tugas: 'Tugas 3',
          status: 'Selesai',
        },
      ]} />
    ),
  },
  {
    path: '/login',
    element: (
      <Box>
        <Typography variant="h1">Login</Typography>
        <Link to={'/'}>Kembali ke Home</Link>
      </Box>
    ),
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
