import SidebarLayout from '@/components/layouts/SidebarLayout';
// import { colors, Paper, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';
import useDetailProjectContext from '../hooks/useDetailProjectContext';
import { Stack } from '@mui/material';
import CreateNewList from './CreateNewList';
import ListSortableItem from './ListSortableItem';

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
        direction={'row'}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        gap={2}
        pb={5}
        sx={{ 
          overflowX: 'auto'
         }}
      >
        <ListSortableItem />
        <CreateNewList />
      </Stack>
    </SidebarLayout>
  );
};

export default DetailProjectContainer;
