import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../redux/actions/user';
import '../styles/profile.css';
import UserPost from '../components/UserPost';

const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getUserProfile(1));
  }, []);

  return profile.length !== 0 && (
    <div className="p-32 space-y-10">
      <div className="flex justify-start items-start bg-gray-100 space-y-10 p-14 rounded-lg flex-row space-x-10">
        <div className="bg-white rounded-lg p-5 space-y-2">
          <div className="bg-gray-200 w-24 h-24 rounded-full" />
          <p className="primary-font text-2xl">{profile.name}</p>
          <p className="primary-font text-xl">{profile.email}</p>
          <p className="primary-font text-lg">{profile.phone}</p>
        </div>
        <div className="space-y-2 p-14 pt-10">
          <p className="primary-font text-gray-600 text-2xl">{profile.company.name}</p>
          <p className="primary-font text-gray-600 text-xl">{profile.company.catchPhrase}</p>
          <p className="primary-font text-gray-600 text-lg">{profile.company.bs}</p>
        </div>
      </div>
      <div>
        <UserPost id={profile.id} />
      </div>
    </div>
  );
};

export default Profile;
