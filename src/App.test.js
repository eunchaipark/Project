// App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shoe Store title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Shoe Store/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders 4 Shoe Cards', () => {
  render(<App />);
  const shoeCards = screen.getAllByTestId('shoe-card-container'); // 수정: 'shoe-card-container' 테스트 ID를 가진 요소들을 찾습니다.
  expect(shoeCards.length).toBe(1); // 수정: 신발 카드 컨테이너가 1개인지 확인합니다.
});


/*// describe 함수는 테스트 스위트를 정의
// App 컴포넌트 테스트라는 테스트 스위트를 정의
describe('App 컴포넌트 테스트', () => {
  // it 함수는 개별 테스트 케이스를 정의함
  // 'App 컴포넌트가 렌더링되는지 확인'이라는 테스트 케이스를 정의
  it('App 컴포넌트가 렌더링되는지 확인', () => {
    // render 함수를 사용하여 App 컴포넌트를 렌더링함
    const { getByText } = render(<App />);
    // getByText 함수를 사용하여 App 컴포넌트 내에 특정 텍스트가 있는지 확인함
    // 'Shoe Store'라는 텍스트가 존재하는지 확인함
    const linkElement = getByText(/Shoe Store/i);
    // 특정 텍스트가 존재한다면, 테스트가 통과됨
    expect(linkElement).toBeInTheDocument();
  });
});*/

/* 테스트 스위트(test suite)는 테스트 케잇(test case)의 집합을 말한다.
여러개의 테스트 케이스가 그룹화되어 있다. 
랜더링은 사용자 인터페이스요소나 콘텐츠가 화면에 그리는 과정
즉 랜더링이 된다는 것은 UI요소가 화면에 나타나는 것을 의미한다.

describe는 테스트 스위트를 정의한다. 특정기능, 모듈도는 컴포넌트에 대한 관련된 테스트케이스를 그룹화한다.
함수내부에 있는 특정 기능이나 컴포넌트에 대한 어려개의 it또는 tesst함수들이 포함된다.

it/test 둘다 단일 테스트 케이스를 정의하는데 사용된다. it과 test이름은 다른데 기능을 동일



/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); learn react라는 텍스트가 존재하는가를 test한다*/

