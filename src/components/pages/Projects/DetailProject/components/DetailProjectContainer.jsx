import { Tab } from '@mui/material';
import SidebarLayout from '@/components/layouts/SidebarLayout';
import useDetailProjectContainer from '../hooks/useDetailProjectContainer';
import ModalTaskDetail from '../../Modals/ModalTaskDetail';
import ModalEditProject from '../../Modals/ModalEditProject';
import { TabContext, TabList } from '@mui/lab';
import { useState } from 'react';
import Dashboard from './Dashboard';
import ProjectBoardPanel from './ProjectBoardPanel';

const DetailProjectContainer = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleChangeTab = (_, newValue) => {
    setActiveTab(newValue);
  };

  const { detailProjectData, detailProjectContext } =
    useDetailProjectContainer();

  return (
    <>
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
        <TabContext value={activeTab}>
          <TabList onChange={handleChangeTab}>
            <Tab label="Dashboard" value={1} />
            <Tab label="Project" value={2} />
          </TabList>
          {
            activeTab === 1 ? <Dashboard /> : <ProjectBoardPanel value={2} />           
          }
        </TabContext>
      </SidebarLayout>
      <ModalTaskDetail />
      <ModalEditProject />
    </>
  );
};

export default DetailProjectContainer;

// cadangan
// import SidebarLayout from '@/components/layouts/SidebarLayout';
// // import { colors, Paper, Typography } from '@mui/material';
// import { useLoaderData } from 'react-router';
// import useDetailProjectContext from '../hooks/useDetailProjectContext';
// import { Stack } from '@mui/material';
// import CreateNewList from './CreateNewList';
// import ListSortableItem from './ListSortableItem';

// const DetailProjectContainer = () => {
//   const detailProjectData = useLoaderData();
//   const detailProjectContext = useDetailProjectContext();

//   return (
//     <SidebarLayout
//       pageTitle={`${detailProjectData.title} (${detailProjectContext.getProjectInitials})`}
//       breadcrumbs={[
//         {
//           label: 'Daftar Proyek',
//           href: '/projects',
//         },
//         {
//           label: detailProjectData.title,
//         },
//       ]}
//     >
//       <Stack
//         direction={'row'}
//         justifyContent={'flex-start'}
//         alignItems={'flex-start'}
//         gap={2}
//         pb={5}
//         sx={{ 
//           overflowX: 'auto'
//          }}
//       >
//         <ListSortableItem />
//         <CreateNewList />
//       </Stack>
//     </SidebarLayout>
//   );
// };

// export default DetailProjectContainer;
