"use server";

type CreatePostActionState = {
  number: number;
};

export async function createPostAction(
  prevState: CreatePostActionState,
): Promise<CreatePostActionState> {
  console.log({ prevState });
  return {
    number: prevState.number + 1,
  };
}
