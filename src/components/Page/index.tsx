import React from 'react';
import { PageContainer } from '../StyledComponents';
import PreLoadPage from '../PreLoadPage';

interface PageInterface {
  loading?: boolean,
  color?: string
};

const Page : React.FC<PageInterface> = (props) => {
  return <PageContainer color={props.color || 'white'}>
    {
      props.loading ? <PreLoadPage /> : props.children 
    }
    </PageContainer>
};


export default Page;