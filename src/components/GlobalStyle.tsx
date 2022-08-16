import styled from 'styled-components';

import {ReactComponent as ArrowDown} from "../assets/arrow-down.svg";
import {ReactComponent as Car} from "../assets/car.svg";
import {ReactComponent as Like} from "../assets/like.svg";
import {ReactComponent as Compare} from "../assets/compare.svg";
import {ReactComponent as Exclude} from "../assets/exclude.svg";


export const ArrowDownIcon = styled(ArrowDown)`
  width: 10px;
  height: 10px;
`

export const CarIcon = styled(Car)`
  fill: #C7C7C7;
  margin: 0 14px 0 0;

  :hover {
    fill: #00A0AB;
  }
`

export const LikeIcon = styled(Like)`
  fill: #FFFFFF;
  position: absolute;
  right: 14px;
  bottom: 128px;

  :hover {
    fill: #00A0AB;
  }
`

export const CompareIcon = styled(Compare)`
  fill: #FFFFFF;
  position: absolute;
  right: 14px;
  bottom: 168px;

  :hover {
    fill: #00A0AB;
  }
`

export const ExcludeIcon = styled(Exclude)`
  fill: #C7C7C7;

  :hover {
    fill: #00A0AB;
  }
`