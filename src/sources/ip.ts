export default async function getIp(): Promise<string | boolean> {
  try {
    const res = await fetch('https://api64.ipify.org')

    if (res.ok) {
      return res.text()
    }
  } catch (e) {
    console.log(e)
  }

  return false
}
