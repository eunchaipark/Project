import { render, screen } from '@testing-library/react';
import ShoeCard from './Shoecard'; // 테스트 대상 컴포넌트 import

test('상품카드 컴포넌트 랜더링 확인', () => {
  // 테스트할 상품 정보
  const shoe = {
    id: 1,
    name: 'Shoe 1',
    description: 'Description of Shoe 1',
    price: 50.00,
    image: 'shoe1.jpg'
  };

  // 상품카드 컴포넌트 랜더링
  render(<ShoeCard {...shoe} />);

  // 상품 정보가 화면에 표시되는지 확인
  const nameElement = screen.getByText(shoe.name);
  const descriptionElement = screen.getByText(shoe.description);
  const priceElement = screen.getByText(`Price: $${shoe.price}`);

  // 예상대로 상품 정보가 표시되는지 확인
  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});
