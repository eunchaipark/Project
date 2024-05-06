// App.js

import React from 'react';
import ShoeCard from './Shoecard'; // ShoeCard 컴포넌트를 import
import './App.css'; // App.css 스타일 파일을 import

class App extends React.Component {
  render() {
    // 가상의 신발 데이터 배열
    const shoeData = [
      { id: 1, name: "Shoe 1", description: "Description of Shoe 1", price: 50.00, image: "shoe1.jpg" },
      { id: 2, name: "Shoe 2", description: "Description of Shoe 2", price: 60.00, image: "shoe2.jpg" },
      { id: 3, name: "Shoe 3", description: "Description of Shoe 3", price: 70.00, image: "shoe3.jpg" },
      { id: 4, name: "Shoe 4", description: "Description of Shoe 4", price: 80.00, image: "shoe4.jpg" },
      // 다른 신발 데이터들 추가
    ];

    return (
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Shoe Store</h1>
        <div className="grid grid-cols-4 gap-8">
          {/* 상품 카드를 4열 그리드로 나열 */}
          {shoeData.map(shoe => (
            <ShoeCard
              key={shoe.id}
              name={shoe.name}
              description={shoe.description}
              price={shoe.price}
              image={shoe.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
