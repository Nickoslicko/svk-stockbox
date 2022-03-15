const generateUsers = () =>
  [...Array(50)].map(() => {
    const lastName = 'nick';
    return {
      data: `test`,
      lastName,
    };
  });

export async function get() {
  return {
    body: generateUsers(),
  };
}