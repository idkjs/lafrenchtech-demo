import styled from "styled-components";

export const mainColor = "black";

export const Title = styled.a.attrs({
  target: "_blank",
  rel: "noopener"
})`
  color: ${props => props.color};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  display: inline-block;
`;

export const ThumbnailA = styled.a.attrs({
  target: "_blank",
  rel: "noopener"
})`
  flex-grow: 1;
  width: 300px;
  height: 200px;
  padding: 5px;
  margin: 10px;
  border: 1px solid ${mainColor};
  border-radius: 8px;
`;
export const Thumbnail = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
