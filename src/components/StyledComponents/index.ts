import styled from 'styled-components';

export const SpanError = styled.div`
  color: red;
`;

export const DivLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(240, 240, 240, 0.5);
`;

export const DivLoaderImg = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  padding: 10px;
  flex-grow: 2;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
`;

export const PageContainer = styled.div<any>`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  background-color: ${(props: any) => props.color || 'rgb(241, 242, 255)'};
`;

export const StepProgressBar = styled.div`
  display: flex;
  padding: 0 10px 10px 0;

  > .steps {
    display: flex;
    align-items: center;
    justify-content: center;

    > .arrow {
      margin-right: 10px;
    }

    > .step {
      border-radius: 4px;
      padding: 5px 10px;
      margin-right: 10px;

      &.current {
        border-width: 4px !important;
      }

      &.last-step {
        border: 2px solid blue;
        color: blue;
        cursor: pointer;
      }

      &.active {
        border: 2px solid #4caf50;
        color: #4caf50;
        cursor: pointer;
      }
    }
  }
`;

export const ModalContainer = styled.div`
  background-color: rgba(33, 33, 33, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  .Modal {
    background-color: white;
    padding: 10px 25px 25px 25px;
    width: 480px;
    position: absolute;
    top: 100px;

    .header {
      border-bottom: 1px solid gray;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: 1.6rem;
        font-weight: bold;
      }

      .close {
        font-size: 2.5rem;
        cursor: pointer;
      }
    }

    .body {
      padding: 10px 0;
      max-height: 500px;
      overflow: auto;
    }
    .footer {
      display: flex;
    }
  }
`;

export const LeftSideContainer = styled.div`
  width: 240px;
  border-right: 1px solid #e0e0e0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;

  .LeftSideHeader {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      border-bottom: 1px solid #e0e0e0;
      width: 100%;
    }

    .logo img {
      width: 180px;
      padding: 10px 0;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  .item {
    margin-top: 10px;
    display: flex;
    align-items: center;

    a {
      list-style: none;
      text-decoration: none;
      color: #4caf50;
      font-weight: 400;
    }

    i {
      margin-right: 15px;
    }

    a:hover {
      transition: opacity 0.1s ease-out;
    }
  }
`;

export const TableHistoryContainer = styled.table`
  border-radius: 0.25em;
  border-collapse: collapse;
  background-color: white;
  width: 100%;

  .column-invisible {
    display: none;
  }

  th {
    border-bottom: 1px solid #364043;
    color: #e2b842;
    font-size: 1.1em;
    font-weight: 600;
    padding: 0.6em 1.2em;
    text-align: left;
  }
  td {
    font-weight: 400;
    padding: 0.7em 1.2em;
  }
  .disabled td {
    color: #4f5f64;
  }
  tbody tr {
    transition: background 0.2s ease;
    border-bottom: 1px solid gray;
  }
  tbody tr:hover {
    background: rgba(11, 43, 57, 0.85);
    cursor: pointer;
    color: #ffffff;
  }
`;

export const HeaderContainer = styled.header<any>`
  width: 100%;
  height: 55px;
  color: ${(props: any) => props.color || 'red'};
  background-color: ${(props: any) => props.bgColor || 'yellow'};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props: any) => props.padding || '10px'};
  padding-right: ${(props: any) => props.padding || '10px'};
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    width: 200px;
    height: 50px;
    padding: 10px;
    color: ${(props: any) => props.color || 'red'};
    cursor: pointer;

    img {
      width: 175px;
      height: 45px;
    }
  }

  .menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 2;

    .item {
      margin: 0 0 0 40px;

      a {
        color: ${(props: any) => props.color || 'red'};
      }
    }

    .item:hover {
      text-decoration: underline;
      transition: opacity 0.1s ease-out;
      cursor: pointer;
    }
  }
`;

export const NotFoundContainer = styled.div`
  color: rgba(23, 23, 23, 0.8);

  .title {
    font-size: 4rem;
    font-weight: bold;
  }

  .text {
    font-size: 1.3rem;
  }
`;
