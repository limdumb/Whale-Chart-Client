import { styled } from "styled-components";
import AsideTabBox from "./TabBox";
import { pletformValue } from "../../Function/pletformValue";
import AllChartBox from "./AllChartBox";
import ContoureLine from "../ContourLine";
import "./css/asidebar.css";
import { useNavigate } from "react-router-dom";

const AsideBarWrapper = styled.aside<{ isAsideBar: boolean }>`
  width: 260px;
  height: 100%;
  background-color: white;
  min-height: 100vh;
  box-shadow: 1px 0px 0px 0px rgb(237, 242, 249);
  padding-top: 30px;
  font-size: 16px;
  font-weight: 400;
  color: rgb(129, 129, 129);
  position: fixed;
  margin-top: 81px;
  z-index: 999999999;
  opacity: ${(props) => (props.isAsideBar ? 1 : 1)};
  transition: visibility 0s, opacity 0.5s;

  @media screen and (max-width: 390px) {
    visibility: ${(props) => (props.isAsideBar ? "visible" : "hidden")};
    opacity: ${(props) => (props.isAsideBar ? 1 : 0)};
  }
`;

const ModalContainer = styled.div<{ isAsideBar: boolean }>`
  display: none;
  @media screen and (max-width: 390px) {
    display: flex;
    width: 390px;
    height: 100vh;
    background: rgba(55, 55, 55, 0.2);
    position: absolute;
    z-index: 999999998;
    visibility: ${(props) => (props.isAsideBar ? "visible" : "hidden")};
  }
`;

const LableWrapper = styled.div`
  padding: 0 30px;
  margin-bottom: 5px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
  height: 25px;
`;

const ContoureLineWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-end;
`;

interface AsideBarProps {
  isAsideOpen: boolean;
  toggleAsideBar: () => void;
}

export default function AsideBar(props: AsideBarProps): JSX.Element {
  const pleftformArray = pletformValue();
  const navigate = useNavigate();

  return (
    <>
      <AsideBarWrapper isAsideBar={props.isAsideOpen}>
        <div className="All_Chart_Box_Conateinr">
          <LableWrapper>
            <span>All Chart</span>
          </LableWrapper>
          <AllChartBox
            toggleAsideBar={props.toggleAsideBar}
            navigate={navigate}
          />
        </div>
        <ContoureLineWrapper>
          <ContoureLine
            color={"rgb(124, 135, 152)"}
            thickness={1}
            opacity={0.1}
          />
        </ContoureLineWrapper>
        <div>
          <LableWrapper>
            <span>CHARTS</span>
          </LableWrapper>
          {pleftformArray.map((el) => {
            return (
              <AsideTabBox
                toggleAsideBar={props.toggleAsideBar}
                navigate={navigate}
                key={el.platform}
                platform={el.platform}
              />
            );
          })}
        </div>
      </AsideBarWrapper>
      <ModalContainer
        onClick={() => props.toggleAsideBar()}
        isAsideBar={props.isAsideOpen}
      />
    </>
  );
}
