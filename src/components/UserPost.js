import React from 'react';
import { PropTypes } from 'prop-types';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPost, deletePost } from '../redux/actions/post';
import UpdatePost from './UpdatePost';
import Modal from './Modal';

const UserPost = ({ id }) => {
  const [updateBox, setUpdateBox] = React.useState(false);
  const [getNewUpdate, setGetNewUpdate] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [getData, setGetData] = React.useState();

  const dispatch = useDispatch();
  const { userPost } = useSelector((state) => state.post);

  React.useEffect(() => {
    dispatch(getUserPost(id));
  }, []);

  React.useEffect(() => {
    if (getNewUpdate) dispatch(getUserPost(id));
  }, [getNewUpdate]);

  const showUpdate = (visible) => {
    setUpdateBox(visible);
  };

  const showModal = (visible) => {
    setModal(visible);
  };

  const handleDelete = () => {
    dispatch(deletePost(getData.id));
    setModal(false);
  };

  return (
    <div>
      {modal && (
        <div className="modal">
          <Modal id={getData.id} str="Are you sure want to delete this post?" func={handleDelete} open={setModal} />
        </div>
      )}
      <div className="pt-5 space-y-5">
        <div className="bg-gray-100 p-24 rounded-xl space-y-5">
          {userPost.map((e) => (
            <div key={e.id}>
              <div className="bg-white rounded-lg p-10 px-14 space-y-5">
                <div className="space-y-2">
                  <p className="primary-font text-2xl">{e.title}</p>
                  <p className="primary-font">{e.body}</p>
                </div>
                <div className="flex justify-end items-end space-x-3">
                  <button onClick={() => { showModal(true); setGetData(e); }} type="button">
                    <BsTrash size={25} />
                  </button>
                  {updateBox && getData.id === e.id ? (
                    <button onClick={() => showUpdate(false)} type="button">
                      <BsPencilSquare size={25} className="text-red-500" />
                    </button>
                  ) : (
                    <button onClick={() => { showUpdate(true); setGetData(e); }} type="button">
                      <BsPencilSquare size={25} />
                    </button>
                  )}
                </div>
              </div>
              {updateBox && e.id === getData.id && (
              <div>
                <UpdatePost
                  id={getData.id}
                  userId={getData.userId}
                  title={getData.title}
                  body={getData.body}
                  stateUpdate={setGetNewUpdate}
                />
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

UserPost.defaultProps = {
  id: [],
};

UserPost.propTypes = ({
  id: PropTypes.node,
});

export default UserPost;
