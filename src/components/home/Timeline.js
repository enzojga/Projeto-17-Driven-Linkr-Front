import styled from "styled-components";
import NewPost from "./NewPost";
import Posts from "../Posts/Posts";
import { getTimeline } from "../Service/api";

export default function Timeline() {
  return (
    <Wrapper>
      <h1>timeline</h1>
      <NewPost />
      <Posts func={getTimeline} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40vw;
  width: 100%;
  margin-right: 25px;
  margin-top: 125px;

  && h1 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-weight: 700;
    color: var(--heavy-text);
  }

  @media (max-width: 767px) {
    margin-right: 0px;
  }
`;
