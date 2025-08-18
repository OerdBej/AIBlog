export const addBlog = async (req, res) => {
  try {
    // when we add a new blog post we send also the data  (title, subtitle etc ) and provide the image

    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );

    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing fields" });
    }
  } catch (error) {}
};
