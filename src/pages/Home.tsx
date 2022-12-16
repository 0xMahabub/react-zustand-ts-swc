import { FC } from 'react';
import { useUser } from '../services';

export const HomePage: FC = () => {
  // fetch users from API
  const { data, isError, isFetched, isLoading } = useUser(); // query
  return (
    <>
      <h2>Home Page!</h2>
      <p>Getting users from jsonplaceholder api {`:=>`} [using react-query] </p>
      {isLoading ? <p>Loading ...</p> : null}
      {isError ? (
        <p>Error (while calling API)</p>
      ) : (
        <>
          {isFetched ? (
            <>
              <h4>The User List</h4>
              {data?.map((u, i) => (
                <p key={i}>
                  <b>Name</b>: {u.name} ~ <b>Works at</b>: {u.company.name}
                </p>
              ))}
            </>
          ) : null}
        </>
      )}
    </>
  );
};
