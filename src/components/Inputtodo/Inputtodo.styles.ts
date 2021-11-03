import styled from 'styled-components';

export const S = {
  Calendar: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 100vh;
`,
    Wrapper: styled.div`
  display: flex;
  justify-content: center;
  & button{
    font-size: 20px;
    padding-bottom: 35px;
  }
`,
    List: styled.li`
  list-style-type: none;
`,
};
