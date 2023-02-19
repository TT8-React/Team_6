import styled from "styled-components";

export const SideBarBox = styled.div`
  background-color: #efefef;
  width: 270px;
  padding: 25px 21px 25px 41px;
  height: 100%;
`;

export const Logo = styled.h2`
  padding: 23px 44px 22px 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #d9d9d9;
  margin-bottom: 92px;
`;

export const SideBarList = styled.ul`
  & li {
    margin-bottom: 27px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  & li.active {
    font-weight: 600;
  }
`;

export const ReportSubMenu = styled.ul`
  transition: 0.5s;
  padding-left: 30px;
  & li {
    margin-bottom: 17px;
  }
  display: ${(props) => props.display};
`;
export const AnalyticsSubMenu = styled.ul`
  padding-left: 30px;
  & li {
    margin-bottom: 17px;
  }
  display: ${(props) => props.display};
  transition: 0.5s;
`;
