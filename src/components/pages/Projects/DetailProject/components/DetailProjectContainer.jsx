import SidebarLayout from '@/components/layouts/SidebarLayout';
// import { colors, Paper, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';
import useDetailProjectContext from '../hooks/useDetailProjectContext';
import { Stack } from '@mui/material';
import CreateNewList from './CreateNewList';

const DetailProjectContainer = () => {
  const detailProjectData = useLoaderData();
  const detailProjectContext = useDetailProjectContext();

  return (
    <SidebarLayout
      pageTitle={`${detailProjectData.title} (${detailProjectContext.getProjectInitials})`}
      breadcrumbs={[
        {
          label: 'Daftar Proyek',
          href: '/projects',
        },
        {
          label: detailProjectData.title,
        },
      ]}
    >
      <Stack
        sx={{
          height: 800,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          direction: 'row',
          gap: 2,
          overflowX: 'auto',
          pb: 5,
        }}
      >
        <CreateNewList />
      </Stack>
    </SidebarLayout>
  );
};

export default DetailProjectContainer;
