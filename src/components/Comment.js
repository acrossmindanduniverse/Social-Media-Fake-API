import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../redux/actions/post';
import '../styles/comment.css';

const Comment = ({ id }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector((state) => state.post);

  React.useEffect(() => {
    dispatch(getComment(id));
  }, []);

  return (
    <div>
      <div className="space-y-2">
        {comment.map((e) => (
          <div className="flex flex-col space-y-5 border-2 rounded-lg p-2">
            <div className="space-y-2">
              <h1 className="primary-font text-xl">{e.name}</h1>
              <p className="primary-font text-sm">{e.email}</p>
            </div>
            <p className="primary-font text-sm">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Comment.defaultProps = {
  id: [],
};

Comment.propTypes = ({
  id: PropTypes.node,
});

export default Comment;
