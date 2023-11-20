import React from "react";
import { Content, Title, Options } from "./Post";

type Props = {
  comment?: any;
};

export default function Comment({ comment }: Props) {
  const subCommentsJSX = comment.subcomments.map((subComment: any) => (
    <SubComment key={subComment.id} comment={subComment} />
    // <>Hello</>
  ));
  return (
    <div>
      <div className="mt-3">
        <Title author={comment.author} date={comment.date} />
        <Content
          type="comment"
          title={comment.title}
          content={comment.content}
        />
        <Options
          type="comment"
          likes={comment.likes}
          comments={comment.comments}
        />
      </div>
      <section className="relative flex mt-3">
        <hr className="absolute h-full w-[2px] rounded bg-zinc-500" />
        <div className="relative ml-3 w-full">
          {subCommentsJSX}
        </div>
      </section>
    </div>
  );
}

type SubCommentProps = {
  comment: any;
};

function SubComment({ comment }: SubCommentProps) {
  return (
    <div className="mt-3">
      <Title author={comment.author} date={comment.date} />
      <Content type="comment" title={comment.title} content={comment.content} />
      <Options
        type="comment"
        likes={comment.likes}
        comments={comment.comments}
      />
    </div>
  );
}
