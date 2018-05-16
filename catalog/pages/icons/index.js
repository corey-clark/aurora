import { pageLoader } from "catalog";

import {
  ChevronIcon,
  UserIcon,
  OverflowIcon
} from "../../../src/components/Icons/index";
import { Container, Row, Column } from "../../../src/components/Grid";
import colors from "../../../src/theme/colors";

const iconStyle = {
  backgroundColor: colors.white,
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const iconLabelStyle = {
  padding: "10px",
  textAlign: "center"
};

export default {
  path: "/icons",
  title: "Icons",
  imports: {
    ChevronIcon,
    UserIcon,
    OverflowIcon,
    Container,
    Row,
    Column,
    iconStyle,
    iconLabelStyle
  },
  content: pageLoader(() => import("./index.md"))
};