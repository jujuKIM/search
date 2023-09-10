import { createPastDate } from "./helpers.js";
import K1 from './image/K1.jpeg';
import K2 from './image/K2.jpg';
import K3 from './image/K3.jpg';
import K4 from './image/K4.jpeg';
import K5 from './image/K5.jpg';
import K6 from './image/K6.jpg';
import K7 from './image/K7.jpeg';
import K8 from './image/K8.jpg';
import K9 from './image/K9.jpg';
import K10 from './image/K10.jpg';

const storage = {
    keywordData: [
        { id: 1, keyword: "학생회관" },
        { id: 2, keyword: "도서관" },
        { id: 3, keyword: "교양강의동" },
        { id: 4, keyword: "행정관" },
        { id: 5, keyword: "자연과학관" },
    ],

    historyData: [

    ],

    productData: [
        {
            id: 1,
            number:"K1",
            name: "학생회관",
            description: "학생생활의 중심으로 각종 동아리방 및 은행, 우체국 등의 편의시설과 학생식당 등이 위치한 건물로 학생생활 전반에 걸친 모든 일들이 여기서 이루어 집니다.",
            imageUrl:K1,
            tel:"043-840-3224"        
        },
        {
            id: 2,
            number:"K2",
            name: "국제교육관",
            description: "대학 재학생들의 국제화 마인드 함양과 외국인 유학생들이 원만한 유학 생활을 영위할 수 있도록 지원, 교육을 전담하기 위한 각종 시설이 마련되어 있습니다.",
            imageUrl:K2,
            tel:"043-840-3182"
        },
        {
            id: 3,
            number:"K3",
            name: "K3 교수연구동",
            description:"유학생들의 편의를 위한 서비스 센터와 더불어 재학생들 및 교직원들을 위한 대회의실, 실습실, 실험실이 있으며 품격 높은 강의를 위한 교수연구실이 있습니다.",
            imageUrl:K3,
            tel:"043-840-3064"
        },
        {
            id: 4,
            number:"K4",
            name: "K4 모시래학사 남동",
            description:"모시래학사는 1,502여명의 관생들이 남동과 여동으로 구분된 총 4개 동의 학사에서 쾌적한 학교생활을 할 수 있도록 자율에 근거한 생활규범을 익히며 학습하는 우리 대학기숙사입니다. ",
            imageUrl:K4,
            tel:"043-840-3783"
        },
        {
            id: 5,
            number:"K5",
            name: "K5 모시래학사 여동",
            description:"모시래학사는 1,502여명의 관생들이 남동과 여동으로 구분된 총 4개 동의 학사에서 쾌적한 학교생활을 할 수 있도록 자율에 근거한 생활규범을 익히며 학습하는 우리 대학기숙사입니다. ",
            imageUrl:K5,
            tel:"043-840-3782"
        },
        {
            id: 6,
            number:"K6",
            name: "K6 인문사회관",
            description:"인문사회관은 인문사회융합대학 학장실 및 행정실, 교강의실, 강의실, 전산실습실, 양현재 등 있습니다.",
            imageUrl: K6,
            tel:"043-840-3402"
        },
        {
            id: 7,
            number:"K7",
            name: "K7 건국체육관",
            description:"관중석 1860석, 배구장 3면을 동시에 사용할 수 있는 주경기장, 스쿼지 3면, 에어로빅실, 트레이닝실, 무도실, 강의실, 교수연구실을 갖추어 있으며, 단과대확과 연계한 운동 처방실도 있습니다.",
            imageUrl:K7,
            tel:"-"
        },
        {
            id: 8,
            number:"K8",
            name: "K8 자산관리동",
            description:"학교의 재산, 기자재를 모아두었으며 그와 관련된 유지보수 업무를 진행하는 곳입니다. ",
            imageUrl:K8,
            tel:"043-840-3859"
        },
        {
            id: 9,
            number:"K9",
            name: "K9 학군단",
            description:"학군단 시설로 강의실, 체력단련실이 있습니다. ",
            imageUrl:K9,
            tel:"043-840-3814"
        },
        {
            id: 10,
            number:"K10",
            name: "K10 해오름학사",
            imageUrl: K10,
            description:"해오름학사는 남동과 여동으로 구분하여 지하 1층, 지상 9층의 2개 동으로 350실에 788명의 남·여학생이 최고의 캠퍼스라이프를 누릴 수 있도록 설계되었으며, 지하와 1층에는 각종의 편의시설이 입점하고 있어 여가의 활용과 편리성이 더욱 높아진 생활관입니다.",
            tel:"043-840-3881 / 043-840-3882"
        },
    ],
};

export default storage;