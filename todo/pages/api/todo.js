import { getNotes } from "../../database/queries/notes";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { rows } = await getNotes();

        res.status(200).json({ success: true, data: rows });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // case 'POST':
    //     try {
    //         const note = await Note.create(req.body);

    //         res.status(201).json({ success: true, data: note })
    //     } catch (error) {
    //         res.status(400).json({ success: false });
    //     }
    //     break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
