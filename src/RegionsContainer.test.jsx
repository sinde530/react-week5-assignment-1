import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selected: {
      region: '서울',
    },
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
      { id: 4, name: '부산' },
      { id: 5, name: '광주' },
      { id: 6, name: '강원도' },
      { id: 7, name: '인천' },
    ],
  }));

  context('with regions', () => {
    it('지역 항목들이 보인다.', () => {
      const { getByText } = render(
        <RegionsContainer />,
      );

      expect(getByText(/서울/)).not.toBeNull();
      expect(getByText(/대전/)).not.toBeNull();
      expect(getByText(/대구/)).not.toBeNull();
      expect(getByText(/부산/)).not.toBeNull();
      expect(getByText(/광주/)).not.toBeNull();
      expect(getByText(/강원도/)).not.toBeNull();
      expect(getByText(/인천/)).not.toBeNull();
    });
  });

  context('when click region', () => {
    it('dispatch가 실행된다.', () => {
      const { getByText } = render(
        <RegionsContainer />,
      );

      fireEvent.click(getByText(/서울/));

      expect(dispatch).toBeCalled();
    });

    it('선택된 region에 (V)가 표시된다.', () => {
      const { getByText } = render(
        <RegionsContainer />,
      );

      expect(getByText(/(V)/)).not.toBeNull();
    });
  });
});
