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
import Modal from './components/Modal';
import Input from './components/Input';
import Footer from './containers/Footer';

export interface FontStyle {
  fontWeight: boolean;
  textShadow: boolean;
  fontColor: boolean;
  fontSize: number | string;
  fontfamily: string;
}

function App() {
  const [bgColor, setBgColor] = useState<string>('#7ED321'); // 카드 배경색
  const [bgImg, setBgImg] = useState<string>(''); // 카드 배경이미지
  const [isImgUpdateModal, setIsImgUpdateModal] = useState<boolean>(false); // "이미지주소로 배경변경" 모달 활성화
  const [bgLinkUrl, setBgLinkUrl] = useState<string>(''); // 이미지주소 URL
  const [isBgLinkAlert, setIsBgLinkAlert] = useState(false); // 이미지 주소 미입력시 알림 멘트 활성화

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

  // 내컴퓨터에서 배경 이미지 선택
  const handleBgImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageUrl = await convertToBase64(e.target.files[0]);
      setBgImg(String(imageUrl));
      setBgLinkUrl('');
    }
  };

  // 모달 활성화
  const handleImgUpdateModal = (state?: string) => {
    // 닫기 버튼 클릭시
    if (state === 'close') {
      setIsBgLinkAlert(false);
      setIsImgUpdateModal(false);
      return;
    }
    // 모달에 이미지주소가 입력되었을때
    if (bgLinkUrl !== '') {
      setBgImg(bgLinkUrl);
      setBgLinkUrl('');
      setIsImgUpdateModal(false);
    } else {
      // 입력되지 않았다면 알림멘트 표출
      setIsBgLinkAlert(true);
    }
  };

  // 이미지 주소 변수에 저장
  const getModalImgLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgLinkUrl(e.target.value); // 이미지주소를 변수에 저장하고
    if (bgLinkUrl !== '') setIsBgLinkAlert(false); // 알림멘트 숨김
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
      {isImgUpdateModal && (
        <Modal onClick={handleImgUpdateModal}>
          <h4>카드 배경에 넣을 이미지 링크를 입력해주세요</h4>
          <p>이미지 URL이 올바르지 않으면 이미지가 적용되지 않습니다.</p>
          <Input
            type="text"
            placeholder="예시) https://naver.com"
            onChange={getModalImgLink}
            onBlur={getModalImgLink}
          />
          {isBgLinkAlert && <span className="modal-alert">이미지 링크를 입력해주세요</span>}
        </Modal>
      )}
      <main>
        <Layout>
          <div className="card-edit-contents">
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
                    <Button
                      title="이미지 주소로 배경 변경"
                      btnStyle="primary"
                      onClick={() => setIsImgUpdateModal(true)}
                    />
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
          </div>
          <div className="img-download-btn">
            <Button title="이미지 다운로드" btnStyle="primary" onClick={() => {}} />
          </div>
        </Layout>
      </main>
      <Footer />
    </div>
  );
}

export default App;
