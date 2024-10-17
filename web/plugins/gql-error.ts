
export default defineNuxtPlugin(() => {
  useGqlError((err: any) => {
    console.log(err);

    // const tokenExpired = err.gqlErrors.some((err: any) => err?.message.includes('<token_expiration>'))
    //
    // if (tokenExpired) {
    //   // Handle token expiration
    // }
  })
})
