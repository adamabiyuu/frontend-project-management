import { TextField as BaseTextField, Box } from '@mui/material';
import { Controller } from 'react-hook-form';

const TextField = ({
  control,
  name,
  label,
  defaultValue,
  helperText,
  ...props
}) => {
    return (
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <Box sx={{ marginBottom: 2 }}>
              <BaseTextField
                {...props}
                fullWidth
                label={label}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                helperText={helperText}
              />
            </Box>
          );
        }}
      />
    )
  
};

export default TextField;
