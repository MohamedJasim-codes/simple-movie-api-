import { mymovie } from '../model/movies.model.js';

export const moviecreation  = async (req,res)=>{

    console.log(req.body);
    //res.send("MOVIES Creation is started");
    const newMovie = new mymovie({
        title: req.body.title,
        desc: req.body.desc,
    });

try{
   const movie = await newMovie.save();
 return res.status(200).json(movie);
}
catch (error){
    return res.status(400).json(error.message);
}
} ;

export const moviecheck= async (req,res)=>{
  const find_mov= await mymovie.findById(req.params.id);

  try {
    if (find_mov == null){
      res.status(404).json({message:"cannot find movie"});
    }
    else{
      res.json(find_mov);
    }

  } catch (error) {
  }
  res.status(404).json({message:"cannot find movie"});

};


export const moviecollection =async (req, res) => {
    try {
        const movies = await mymovie.find();
        res.json(movies);
      } catch (error) {
        res.status(500).json({ message: "movie can't bet update" });
      }
   

};


export const movieupdate = async(req, res) => {

    try {
        const updatedMovie = await mymovie.findOneAndUpdate(
          { _id: req.params.id },
          {
            title: req.body.title,
            desc: req.body.desc,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatedMovie);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
};



export const  moviedeltion = async (req, res) => {
    const movieId = req.params.id;

    try {
      await mymovie.deleteOne({ _id: movieId });
      res.json({ message: "Movie deleted!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};