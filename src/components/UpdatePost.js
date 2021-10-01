import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { updatePost } from '../redux/actions/post';

const UpdatePost = ({
  id, userId, title, body, stateUpdate
}) => {
  const [postData, setPostData] = React.useState({
    sId: id,
    sUserId: userId,
    sTitle: title,
    sBody: body,
  });
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updatePost(postData, id));
    stateUpdate(true);
  };

  return (
    <div className="space-y-3 my-5">
      <div className="bg-white p-6 rounded-lg">
        <input
          onChange={(e) => setPostData({
            ...postData,
            sTitle: e.target.value
          })}
          defaultValue={postData.sTitle}
          className="w-full outline-none"
          type="text"
        />
      </div>
      <div
        onChange={(e) => setPostData({
          ...postData,
          sBody: e.target.value
        })}
        className="bg-white p-6 py-14 rounded-lg"
      >
        <input defaultValue={postData.sBody} className="w-full outline-none" type="text" />
      </div>
      <div className="flex justify-end items-end">
        <button onClick={handleUpdate} type="button" className="bg-blue-500 flex justify-center items-center p-5 rounded-lg">
          <p className="primary-font text-blue">
            Update
          </p>
        </button>
      </div>
    </div>
  );
};

UpdatePost.defaultProps = {
  stateUpdate: () => {},
  id: [],
  userId: [],
  title: [],
  body: [],
};

UpdatePost.propTypes = ({
  stateUpdate: PropTypes.func,
  id: PropTypes.node,
  userId: PropTypes.node,
  title: PropTypes.node,
  body: PropTypes.node,
});

export default UpdatePost;
