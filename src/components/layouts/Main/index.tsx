import React from 'react';
import Header from '../../sections/Header';
import { Outlet } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './MainLayout.module.scss';
import styled from 'styled-components';

function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 12rem 3rem;

  @include media('max', 'xl') {
    padding: 0 2.4rem;
  }

  @include media('max', 'sm') {
    padding: 0;
  }
`;

const Content = styled.div`
  @include media('max', 'sm') {
    padding: 1.5rem;
  }
`;

export default MainLayout;
