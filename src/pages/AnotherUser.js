import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getUserPost } from '../redux/actions/post';

const AnotherUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { userPost } = useSelector((state) => state.post);

  React.useEffect(() => {
    dispatch(getUserPost(location.state));
  }, []);

  return (
    <div className="p-24">
      <div className="bg-gray-100 p-44 rounded-xl space-y-5">
        {userPost.map((e) => (
          <div key={e.id} className="bg-white p-10 rounded-lg space-y-2">
            <p className="primary-font text-xl font-bold">{e.title}</p>
            <p className="primary-font text-lg">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnotherUser;
