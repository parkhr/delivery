import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // counter 라는 state 속성을 추가
  state: {
    SERVER_URL: "http://localhost:5000",

    carriers: [
      '택배사 선택', 'DHL', '천일택배', 'CJ대한통운', 'CU 편의점택배','GS Postbox 택배','CWAY (Woori Express)','대신택배','우체국 택배',
      '한의사랑택배', '한진택배', '합동택배', '홈픽', '한서호남택배', '일양로지스', '경동택배', '건영택배', '로젠택배', '롯데택배', 'SLX',
      'TNT', 'EMS', 'Fedex', 'UPS', 'USPS'
    ],

    carriersObject: {
      '택배사 선택' : null,
      'DHL' : 'de.dhl',
      '천일택배' : 'kr.chunilps',
      'CJ대한통운' : 'kr.cjlogistics',
      'CU 편의점택배' : 'kr.cupost',
      'GS Postbox 택배' :	'kr.cvsnet',
      'CWAY (Woori Express)' : 'kr.cway',
      '대신택배' : 'kr.daesin',
      '우체국 택배' : 'kr.epost',
      '한의사랑택배' : 'kr.hanips',
      '한진택배' : 'kr.hanjin',
      '합동택배' : 'kr.hdexp',
      '홈픽' : 'kr.homepick',
      '한서호남택배' : 'kr.honamlogis',
      '일양로지스' :'kr.ilyanglogis',
      '경동택배' : 'kr.kdexp',
      '건영택배' : 'kr.kunyoung',
      '로젠택배' : 'kr.logen',
      '롯데택배' : 'kr.lotte',
      'SLX' : 'kr.slx',
      'TNT' : 'nl.tnt',
      'EMS' : 'un.upu.ems',
      'Fedex' : 'us.fedex',
      'UPS' : 'us.ups',
      'USPS' : 'us.usps'
    }
  },

  getters: {

  },

  mutations: {

  },

  actions : {

  }
});
