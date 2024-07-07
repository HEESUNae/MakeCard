import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';
import Header from './containers/Header';
import Card from './components/Card';
import Layout from './containers/Layout';
import ColorPicker from './components/ColorPicker';
import Button from './components/Button';
import Switch from './components/Switch';
import InputFile from './components/InputFile';
import InputNumber from './components/InputNumber';
import { convertToBase64 } from './utill/utill';

export interface FontStyle {
  fontWeight: boolean;
  textShadow: boolean;
  fontColor: boolean;
  fontSize: number | string;
  fontfamily: string;
}

function App() {
  const [bgColor, setBgColor] = useState<string>('#7ED321');
  const [bgImg, setBgImg] = useState<string>('');

  // 폰트 스타일
  const [fontStyle, setFontStyle] = useState<FontStyle>({
    fontWeight: false,
    textShadow: false,
    fontColor: false,
    fontSize: 24,
    fontfamily: 'Freesentation-Regular',
  });

  // 배경색 컬러피커 선택
  const handleBgColor = (color: string) => {
    setBgImg('');
    setBgColor(color);
  };

  // 배경 이미지 선택
  const handleBgImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageUrl = await convertToBase64(e.target.files[0]);
      setBgImg(String(imageUrl));
    }
  };

  // 폰트 셀렉트 옵션
  const options = [
    { value: 'Freesentation-Regular', label: '프레젠테이션체' },
    { value: 'HSSanTokki20-Regular', label: 'HS산토끼체2.0' },
    { value: 'GowunBatang-Regular', label: '고운바탕체' },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Layout>
          <div className="card-container">
            <Card bgColor={bgColor} bgImg={bgImg} fontStyle={fontStyle} />
          </div>
          <div className="edit-container">
            <div className="edit-list background">
              <h2>배경을 설정하세요</h2>
              <div className="background-style-controler">
                <ColorPicker background={bgColor} handleBgColor={(color) => handleBgColor(color)} />
                <div className="btn-wrap">
                  <InputFile onChange={handleBgImg} />
                  <Button title="링크로 이미지 배경 변경" btnStyle="primary" />
                </div>
              </div>
            </div>
            <div className="edit-list">
              <h2>폰트 설정</h2>
              <div className="font-style-controler">
                <label>
                  폰트
                  <Select
                    options={options}
                    defaultValue={options[0]}
                    onChange={(e) => setFontStyle((prev: FontStyle) => ({ ...prev, fontfamily: e?.value || '' }))}
                  />
                </label>
                <label>
                  크기
                  <InputNumber
                    min={16}
                    max={30}
                    defaultValue={24}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFontStyle((prev) => ({ ...prev, fontSize: e.target.value }))
                    }
                  />
                </label>
              </div>
              <div className="font-style-controler">
                <label>
                  두께
                  <Switch
                    onChange={() => setFontStyle((prev) => ({ ...prev, fontWeight: !prev.fontWeight }))}
                    checked={fontStyle.fontWeight}
                  />
                </label>
                <label>
                  그림자
                  <Switch
                    onChange={() => setFontStyle((prev) => ({ ...prev, textShadow: !prev.textShadow }))}
                    checked={fontStyle.textShadow}
                  />
                </label>
                <label>
                  색상
                  <Switch
                    onChange={() => setFontStyle((prev) => ({ ...prev, fontColor: !prev.fontColor }))}
                    checked={fontStyle.fontColor}
                  />
                </label>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}

export default App;
