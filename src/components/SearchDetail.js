import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storage from '../storage';

const SearchDetail = ({}) => {
  const { id } = useParams(); // URL 파라미터에서 itemId 값을 가져옴
  
//   const [item, setItem] = useState(null);


  // id에 해당하는 상세 데이터 찾기
  const selectedItem = storage.productData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>상세 정보가 없습니다.</div>;
  }
//   useEffect(() => {
//     const fetchedItem=storage.productData.find(item=>item.id===itemId);
//     setItem(fetchedItem);
//   }, [itemId]);

//   if (!item) {
//     return <div>Loading...</div>;
//   }

  const { number,name, description,tel,imageUrl } = selectedItem;


  return (
    <div>
        <img src={imageUrl} alt ="img"/>
        <div className='dataContainer'>
            <h2>{number}{name}</h2>
            <p>시설소개</p>
            <p>{description}</p>
            <p>전화번호: {tel}</p>
        </div>
    </div>
  );
};

export default SearchDetail;
