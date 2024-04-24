import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import {Paper, styled, Typography} from '@mui/material';
import React from 'react';
import {useDropzone} from 'react-dropzone';
import themeDark from '@/theme/theme';

const ImageUploaderContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '280px',
  borderRadius: '8px',
  border: '0.8px dashed #5C5C5C',
});

export const ImageUploader: React.FC<any> = ({inputRef, onDrop}) => {
  const {getRootProps, getInputProps} = useDropzone({
    onDrop: (acceptedFiles: File[]) => onDrop(acceptedFiles),
  });
  return (
    <ImageUploaderContainer
      {...getRootProps()}
      onClick={() => inputRef?.current.click()}
    >
      <input {...getInputProps()} />
      <CropOriginalRoundedIcon sx={{fontSize: 48, color: '#6E7278'}} />
      <Typography variant="body1" color="secondary" sx={{textAlign: 'center'}}>
        <>Selecciona </>
        <span
          style={{
            color: themeDark.palette.primary.main,
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          click para seleccionar
        </span>
      </Typography>
    </ImageUploaderContainer>
  );
};
