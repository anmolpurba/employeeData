import mongoose from "mongoose";
export function connectDatabase(){
   
    mongoose.connect('mongodb+srv://preet:Data%401234@cluster0.b0zrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => console.log('Connected to MongoDB'))
       .catch(err => console.error('Failed to connect to MongoDB', err));
}