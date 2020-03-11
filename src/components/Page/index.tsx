import React from 'react';
import { PageContainer } from '../StyledComponents';
import PreLoadPage from '../PreLoadPage';

interface PageInterface {
  loading?: boolean
};

const Page : React.FC<PageInterface> = (props) => {
  return <PageContainer>
    {
      props.loading ? <PreLoadPage /> : props.children 
    }
    </PageContainer>
};


export default Page;