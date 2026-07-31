import { Edit } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import datetime from '@/utils/datetime';
import useDetailProjectContext from '../hooks/useDetailProjectContext';

const ProjectDuration = () => {
  const { detailProjectData } = useDetailProjectContext();

  if (!detailProjectData) return null;

  const totalDays = datetime.getDurationDays(
    detailProjectData.created_at,
    detailProjectData.due_date,
  );

  return (
    <Stack alignItems="flex-end">
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="subtitle1" fontWeight={700}>
          Durasi Proyek {totalDays} hari
        </Typography>

        <IconButton size="small">
          <Edit fontSize="small" />
        </IconButton>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        {datetime.format(detailProjectData.created_at, 'DD MMM YYYY')} -{' '}
        {datetime.format(detailProjectData.due_date, 'DD MMM YYYY')}
      </Typography>
    </Stack>
  );
};

export default ProjectDuration;


// import { Edit } from '@mui/icons-material';
// import { IconButton, Stack, Typography } from '@mui/material';
// import datetime from '@/utils/datetime';
// import useDetailProjectContext from '../hooks/useDetailProjectContext';

// const ProjectDuration = () => {
//   const { detailProjectData } = useDetailProjectContext();

//   console.log('===== ProjectDuration =====');
//   console.log('detailProjectData:', detailProjectData);

//   if (!detailProjectData) {
//     console.log('detailProjectData masih kosong');
//     return null;
//   }

//   console.log('created_at:', detailProjectData.created_at);
//   console.log('due_date:', detailProjectData.due_date);

//   const totalDays = datetime.getDurationDays(
//     detailProjectData.created_at,
//     detailProjectData.due_date,
//   );

//   console.log('totalDays:', totalDays);

//   return (
//     <Stack alignItems="flex-end">
//       <Stack direction="row" alignItems="center" gap={1}>
//         <Typography variant="subtitle1" fontWeight={700}>
//           Durasi Proyek {totalDays} hari
//         </Typography>

//         <IconButton size="small">
//           <Edit fontSize="small" />
//         </IconButton>
//       </Stack>

//       <Typography variant="body2" color="text.secondary">
//         {datetime.format(detailProjectData.created_at, 'DD MMM YYYY')} -{' '}
//         {datetime.format(detailProjectData.due_date, 'DD MMM YYYY')}
//       </Typography>
//     </Stack>
//   );
// };

// export default ProjectDuration;