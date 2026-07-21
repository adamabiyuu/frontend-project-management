import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '../../layouts/SidebarLayout/SidebarLayout';
// import SidebarLayout from '@/components/layouts/SidebarLayout';

const Projects = () => {

  return (
    <SidebarLayout 
        pageTitle="Dashboard"
        breadcrumbs={[
            {
                label: 'Daftar Proyek',
            }
        ]}
    >
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Menampilkan daftar proyek di sini</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default Projects;
