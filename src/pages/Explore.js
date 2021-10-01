import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { BsPersonSquare, BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router';
import { getPost } from '../redux/actions/post';
import '../styles/explore.css';
import Comment from '../components/Comment';
import Post from '../components/Post';
import PostComment from '../components/PostComment';

const Explore = () => {
  const [viewComment, setViewComment] = React.useState(false);
  const [getId, setGetId] = React.useState(0);

  const dispatch = useDispatch();
  const history = useHistory();
  const { post } = useSelector((state) => state.post);

  const goToProfile = () => {
    history.push('/profile');
  };

  const goToUserList = () => {
    history.push('/users');
  };

  React.useEffect(() => {
    dispatch(getPost());
  }, []);

  const showComment = (visible) => {
    setViewComment(visible);
  };

  return (
    <div className="bg-white p-24">
      <div className="fixed right-0 px-5">
        <div className="flex flex-col space-y-10 justify-center items-center">
          <button onClick={goToProfile} type="button">
            <BsPersonSquare size={40} />
          </button>
          <button onClick={goToUserList} type="button">
            <BsSearch size={40} />
          </button>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl flex flex-col justify-center items-center space-y-14 py-5 px-96">
        <Post id={1} />
        {post.map((e) => (
          <div key={e.id} className="bg-white rounded-lg p-4 w-full space-y-5">
            <div className="space-y-3">
              <h1 className="primary-font text-lg capitalize font-semibold">{e.title}</h1>
              <p className="primary-font capitalize">{e.body}</p>
            </div>
            <div className="flex justify-end items-end">
              {viewComment && e.id === getId ? (
                <button
                  onClick={() => {
                    showComment(false);
                    setGetId(0);
                  }}
                  type="button"
                >
                  <RiArrowDropUpLine size={30} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    showComment(true);
                    setGetId(e.id);
                  }}
                  type="button"
                >
                  <RiArrowDropDownLine size={30} />
                </button>

              )}
            </div>
            {viewComment && e.id === getId && (
              <div className="space-y-3">
                <Comment id={getId} />
                <div className="border-2 rounded-lg">
                  <PostComment id={e.id} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
