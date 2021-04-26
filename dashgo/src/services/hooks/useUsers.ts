import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersResponde ={
  totalCount: number;
  users: User[];
}

export async function getUsers(page:number): Promise<GetUsersResponde> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);
  console.log('aqui')
  console.log(totalCount)
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {users, totalCount};
}

export function useUsers(page:number) {
  return useQuery([ "users", page], () => getUsers(page), {
    staleTime: 1000 * 5,
  });
}
