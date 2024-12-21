// Return the details of given user_id
export default defineEventHandler(async (event) => {
  let user = <any>{};
  const userId = getRouterParam(event, "userId");
  // Imaging fetch the user from database
  await new Promise((resolve) => setTimeout(resolve, 3000));
  user.id = userId;
  return user;
});
