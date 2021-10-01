import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUsers } from '../redux/actions/user';

const UserList = () => {
  const [getId, setGetId] = React.useState();
  const userSignedId = 1;
  const dispatch = useDispatch();
  const history = useHistory();
  const { users } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  React.useEffect(() => {
    if (getId !== undefined) {
      if (getId === userSignedId) {
        history.push('/profile');
      } else {
        history.push('/another-user', getId);
      }
    }
  }, [getId]);

  return (
    <div className="p-24">
      <div className="bg-gray-100 rounded-xl p-44 space-y-5 flex flex-col">
        {users.map((e) => (
          <button onClick={() => setGetId(e.id)} type="button" key={e.id} className="bg-white rounded-lg p-5 space-y-5 flex justify-start items-start flex-row">
            <div className="mx-5">
              <div className="bg-gray-100 rounded-full w-24 h-24" />
            </div>
            <div className="flex justify-start items-start flex-col">
              <p className="primary-font text-xl">{e.name}</p>
              <p className="primary-font text-lg">{e.email}</p>
              <p className="primary-font text-lg">{e.phone}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
