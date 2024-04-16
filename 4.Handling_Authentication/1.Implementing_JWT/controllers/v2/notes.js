let notes = [];

export const getNotes = (req, res) => {
  console.log(notes);
  res.send(notes);
};
