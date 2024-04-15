let notes = [];

export const getNotesForV2 = (req, res) => {
  console.log(notes);
  res.send(notes);
};
