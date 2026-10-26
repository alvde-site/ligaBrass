import React from "react";
import "./SocialMedia.css";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
  // Строгое правило: если массив links не передан, сразу возвращаем null
  if (!props.links || props.links.length === 0) {
    return null;
  }

  return (
    <div className="social-media-div">
      {props.links.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper
              backgroundColor={media.backgroundColor}
              theme={props.theme}
            >
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
