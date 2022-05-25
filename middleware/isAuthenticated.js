export default function ({ app, redirect }) {
  const userToken = app.$cookies.get('token')
  if (userToken === undefined) {
    return redirect('/login')
  }
}
