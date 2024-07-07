import React, { useRef } from 'react';
import Button from '../Button';
import { StyledInputFile } from './style';

interface InputFile {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const InputFile: React.FC<InputFile> = ({ onChange }) => {
  const imgFileInputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledInputFile>
      <input type="file" name="file" onChange={onChange} ref={imgFileInputRef} />
      <Button title="내 컴퓨터에서 이미지 찾기" btnStyle="primary" onClick={() => imgFileInputRef?.current?.click()} />
    </StyledInputFile>
  );
};

export default InputFile;
