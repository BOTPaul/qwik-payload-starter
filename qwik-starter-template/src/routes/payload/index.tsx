import { DocumentHead, RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { Resource, component$ } from "@builder.io/qwik";

type UserData = {
  id: string;
  name: string;
};

type UsersData = UserData[];

export const onGet: RequestHandler<UsersData> = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    if (!response.ok)
      return Promise.reject(
        `Response wasn't OK: ${response.status} | ${response.statusText}`
      );

    const payload: { docs: UsersData } = await response.json();

    return payload.docs;
  } catch (err) {
    console.error(err);
    return Promise.reject(`Error with fetch. See logs.`);
  }
};

export default component$(() => {
  const usersData = useEndpoint<UsersData>();

  return (
    <Resource
      value={usersData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(users) => (
        <ul>
          {users.map((user) => (
            <li>
              {user.id} | {user.name}
            </li>
          ))}
        </ul>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: 'Payload Integration',
};
