import SidebarLayout from '@/components/layouts/SidebarLayout';
// import { colors, Paper, Typography } from '@mui/material';
import { useLoaderData } from 'react-router';
import useDetailProjectContext from '../hooks/useDetailProjectContext';

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

    </SidebarLayout>
  );
};

export default DetailProjectContainer;
