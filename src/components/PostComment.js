import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { postComment } from '../redux/actions/post';

const PostComment = ({ id }) => {
  const [comment, setComment] = React.useState({
    postId: id,
    body: '',
  });
  const dispatch = useDispatch();

  const handlePostComment = () => {
    dispatch(postComment(comment, id));
    setComment({
      ...comment,
      body: '',
    });
  };

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handlePostComment();
        }
      }}
      className="w-full"
    >
      <div className="bg-white p-5">
        <input
          onChange={(e) => setComment({
            ...comment,
            body: e.target.value,
          })}
          value={comment.body}
          className="primary-font w-full outline-none"
          placeholder="Comment..."
        />
      </div>
    </div>
  );
};

PostComment.defaultProps = {
  id: [],
};

PostComment.propTypes = ({
  id: PropTypes.node,
});

export default PostComment;
