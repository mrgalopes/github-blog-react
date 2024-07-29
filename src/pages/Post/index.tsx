"use client";

// import { useParams } from "react-router-dom";
import { PostCard, PostLink, PostText } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { TextM, TitleL } from "../../styles/mixins";
import Markdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import demoPost from "./demo-post.md";
import { useEffect, useState } from "react";

export function Post() {
  // const { slug } = useParams();
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(demoPost)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <PostCard>
        <PostLink $position="left">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </PostLink>
        <PostLink $position="right" href="https://github.com">
          <span>GITHUB</span>{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </PostLink>
        <PostText>
          <TitleL>JavaScript data types and data structures</TitleL>

          <div>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              <TextM $variant="baseSpan">cameronwll</TextM>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              <TextM $variant="baseSpan">Rocketseat</TextM>
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              <TextM $variant="baseSpan">32 seguidores</TextM>
            </span>
          </div>
        </PostText>
      </PostCard>

      <div>
        <Markdown
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={dark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </>
  );
}
