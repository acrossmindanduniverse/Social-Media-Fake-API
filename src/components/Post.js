import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { postData } from '../redux/actions/post';

const Post = ({ id }) => {
  const [data, setData] = React.useState({
    title: '',
    body: '',
    userId: id,
  });
  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(postData(data));
    setData({
      ...data,
      title: '',
      body: '',
    });
  };

  return (
    <div className="w-full space-y-3">
      <div className="bg-white rounded-lg p-2 px-5">
        <input
          value={data.title}
          onChange={(e) => setData({
            ...data,
            title: e.target.value
          })}
          placeholder="Title..."
          className="w-full outline-none primary-font"
          type="text"
        />
      </div>
      <div className="bg-white rounded-lg p-4 px-5">
        <input
          value={data.body}
          onChange={(e) => setData({
            ...data,
            body: e.target.value
          })}
          placeholder="Body..."
          className="w-full outline-none primary-font"
          type="text"
        />
      </div>
      <div className="flex justify-end items-end">
        <button onClick={handlePost} type="button" className="flex justify-center items-center bg-red-400 p-5 rounded-lg">
          <p className="primary-font text-white">Post</p>
        </button>
      </div>
    </div>
  );
};

Post.defaultProps = {
  id: [],
};

Post.propTypes = ({
  id: PropTypes.node,
});

export default Post;
