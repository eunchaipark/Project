import React, { useState, useEffect } from 'react';
import ShoeCard from './Shoecard';

const App = () => {
  const [shoeData, setShoeData] = useState([]); // 상품 목록 상태
  const [loading, setLoading] = useState(false); // 로딩 상태

  // 초기에 상품 목록 로드
  useEffect(() => {
    loadMoreShoes();
  }, []);

  // 무한 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      loadMoreShoes();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]); // 로딩 상태가 변경될 때마다 이벤트 핸들러 등록

  // 상품 추가 로드
  const loadMoreShoes = () => {
    setLoading(true); // 로딩 상태 설정
    // TODO: API 호출을 통해 새로운 상품 데이터 가져오기
    // 임시로 setTimeout을 사용하여 1초 후에 상품 목록에 상품 추가
    setTimeout(() => {
      const newShoes = generateDummyShoes(); // 임시 상품 데이터 생성
      setShoeData(prevShoes => [...prevShoes, ...newShoes]); // 기존 상품 목록에 새로운 상품 추가
      setLoading(false); // 로딩 상태 해제
    }, 1000);
  };

  // 임시 상품 데이터 생성 함수 (테스트용)
  const generateDummyShoes = () => {
    return [
      { id: 5, name: "Shoe 5", description: "Description of Shoe 5", price: 90.00, image: "shoe5.jpg" },
      { id: 6, name: "Shoe 6", description: "Description of Shoe 6", price: 100.00, image: "shoe6.jpg" },
      // 추가적인 상품 데이터
    ];
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-8">Shoe Store</h1>
      <div className="grid grid-cols-4 gap-8">
        {/* 상품 카드를 4열로 나열 */}
        {shoeData.map(shoe => (
          <ShoeCard
            key={shoe.id}
            name={shoe.name}
            description={shoe.description}
            price={shoe.price}
            image={shoe.image}
          />
        ))}
        {loading && <p className="text-center">Loading...</p>}
      </div>
    </div>
  );
};

export default App;
