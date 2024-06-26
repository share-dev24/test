import axios from 'axios';
import { IFormData, IUserLocation } from '../../types/createCardType';

const kakaoUrl = 'https://dapi.kakao.com/v2/local/search/category.json';
const KAKAO_API_KEY = `KakaoAK ${import.meta.env.VITE_REST_API_KEY}`;

// 사용자가 입력한 theme 데이터 -> 카카오 로컬 카테고리 code로 변환하는 함수
const changeCategoryCode = (theme: string) => {
  switch (theme) {
    case 'cafe':
      return 'CE7';
    case 'restaurant':
      return 'FD6';
    case 'event':
      return 'CT1';
    case 'spot':
      return 'AT4';
  }
};

// 사용자가 받아온 카테고리 code 데이터 -> 카테고리 theme로 변환하는 함수
export const changeTheme = (code: string) => {
  switch (code) {
    case 'CE7':
      return '카페';
    case 'FD6':
      return '맛집';
    case 'CT1':
      return '문화시설';
    case 'AT4':
      return '관광명소';
  }
};

// 카카로 로컬 api 주소 생성 함수
export const createKakaoLocalUrl = (
  userLocation: IUserLocation,
  formData: IFormData,
  theme: string
) => {
  const randomPage = Math.floor(Math.random() * 9 + 1);
  const radius = parseInt(formData.range) * 1000;
  const code = changeCategoryCode(theme);

  const resultUrl =
    formData.range === '제한없음'
      ? `${kakaoUrl}?category\_group\_code=${code}&page=${randomPage}&size=10`
      : `${kakaoUrl}?y=${userLocation?.latitude}&x=${userLocation?.longitude}&category\_group\_code=${code}&radius=${radius}&page=${randomPage}&size=10`;

  return resultUrl;
};

// 카카오 로컬 api -> GET 함수
export const getKakaoPlaces = async (url: string) => {
  const response = await axios({
    method: 'get',
    url: url,
    headers: {
      Authorization: KAKAO_API_KEY
    }
  });

  return response;
};
