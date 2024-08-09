import { useQuery } from '@apollo/client';

import  from '../components/ProfileList';
import  from '../components/ProfileForm';

import {  } from '../utils/';

const Home = () => {
  const { loading, data } = useQuery();

  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          < />
        </div>

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <
              profiles={profiles}
              title="Let's check on your progress"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;